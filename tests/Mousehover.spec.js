import {test, expect} from '@playwright/test';

test('Mouse Hovering',async function({page}){
    await page.goto("https://www.flipkart.com/");
    
    //close login popup if it appears
    const closeBtn = page.getByRole('button',{name:'X'});
    if(await closeBtn.isVisible())
    {
        await closeBtn.click();
    }
    
    await page.getByLabel('Fashion').hover();
    
    await page.waitForTimeout(2000);
    
    // Hover main top bar item "Electronics"
    const electronics = page.locator("span", { hasText: "Electronics" });
    
   
    // Ensure it's visible
    await electronics.waitFor({ state: "visible" });
    
    await page.waitForTimeout(2000);
    
    
    // Hover using bounding box (bypasses overlay issue)
    const box = await electronics.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    
    // Wait for submenu to actually open
    await page.waitForSelector("text=Gaming", { timeout: 5000 });

    const gaming = page.getByText("Gaming", { exact: true });
    await gaming.hover();

    // Wait for Level 3 submenu
    const consoles = page.getByText("Gaming Consoles", { exact: true });
    await consoles.waitFor({ state: "visible" });

    await consoles.click();

    await expect(page).toHaveURL(/gaming/i);

});


