import {test, expect} from '@playwright/test';

test('Verify Google',async function({page}){
    
    await page.goto("https://www.google.com");
    
    const url = await page.url();
    
    console.log("Url is " + url);
    
    const title = await page.title();
    
    console.log("Title is "+ title);
    
    await expect(page).toHaveTitle("Google");
});