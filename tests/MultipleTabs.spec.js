import { test, expect } from '@playwright/test';
import path from 'path';

test('Working With Multiple Tabs', async ({ browser }) => {
  
    const context = await browser.newContext();
  
    const page = await context.newPage();
    
    //await page.goto("https://www.facebook.com/");
    await page.goto("https://the-internet.herokuapp.com/windows");
  
    const [newPage] = await Promise.all
                      (
                        [
                          context.waitForEvent("page"),
                           page.getByRole('link', {name:'Click Here'}).click()
                        ]
                      )
                      
        await expect(newPage.getByText('New Window')).toBeVisible();
        
        await newPage.waitForTimeout(2000);
        
        await newPage.close();
        
        await page.getByRole('link' , {name: 'Fork me on GitHub'}).click({force:true});
        
        await expect(page).toHaveURL("https://github.com/saucelabs/the-internet");
});