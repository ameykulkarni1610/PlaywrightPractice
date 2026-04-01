import {test, expect} from '@playwright/test';

test('another checkboxes',async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    let items =  page.locator('.interest-div');
    //const count = await checboxes.count();
    
    const allCheckboxes = await items.count();
    
       for(let i=0;i < allCheckboxes;i++)
    {
        const checkbox = await items.nth(i).locator('input[type="checkbox"]');
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        //await page.waitForTimeout(2000);
    }
    
    for(let i=0;i<allCheckboxes;i++)
    {
        const element = items.nth(i);
        const text = await element.locator('label').innerText();
        
        if(text.includes("Selenium")||text.includes("JavaScript")||text.includes("Ruby"))
        {
           const checkbox = element.locator('input[type="checkbox"]');
           await checkbox.uncheck();
           await expect(checkbox).not.toBeChecked();
        }
        
    }
});