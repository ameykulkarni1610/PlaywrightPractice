import {test,expect} from "@playwright/test";

test('handling radio buttons', async function({page}){
    /*await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    await page.locator('input[type="radio"][value="Female"]').check();
    await expect(page.locator('input[type="radio"][value="Female"]')).toBeChecked();
    
    await page.locator('input[type="radio"][value="Male"]').check();
    await expect(page.locator('input[type="radio"][value="Male"]')).toBeChecked();
    
    await expect(page.locator('input[type="radio"][value="Female"]')).not.toBeChecked();
    */
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    const female = await page.locator('input [value="Female"]');
    const male = await page.locator('input [value="Male"]');
    
    await female.check();
    await expect(female).toBeChecked();
    
    await male.check();
    await expect(male).toBeChecked();
    
    await expect(female).not.toBeChecked();
    
})