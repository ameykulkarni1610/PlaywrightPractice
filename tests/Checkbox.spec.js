import {test, expect} from '@playwright/test';

test('Checkboxes',async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    
    let checkboxes = await page.locator('.interest-div input[type="checkbox"]');
    
    const allCheckboxes = await checkboxes.count();
    
    await page.getByRole('checkbox', {name : "JS"}).check();
    
    await expect(page.getByRole('checkbox', {name : "JS"})).toBeChecked();
    
    //await page.waitForTimeout(2000);
    
    await page.getByRole('checkbox',{name : "JavaScript"}).check();
    
    await expect(page.getByRole('checkbox', {name : "JavaScript"})).toBeChecked();
    
    //wait page.waitForTimeout(2000);
    
    await page.getByRole('checkbox', {name : "Ruby"}).check();
    
    await expect(page.getByRole('checkbox', {name : "Ruby"})).toBeChecked();
    
    //await page.waitForTimeout(2000);
    
    await page.getByRole('checkbox', {name : "JS"}).uncheck();
    await page.getByRole('checkbox',{name : "JavaScript"}).uncheck();
    await page.getByRole('checkbox',{name : "Ruby"}).uncheck();
    
    for(let i=0;i < allCheckboxes;i++)
    {
        let checkbox = await checkboxes.nth(i);
        await checkbox.check();
        //await page.waitForTimeout(2000);
    }
    
});