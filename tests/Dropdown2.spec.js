import {test, expect} from '@playwright/test';

test('Dropdowns',async function({page}){
    await page.goto("https://www.facebook.com/r.php?entry_point=login");
    
    let allDays = await page.locator('#day option');
    const totalDays = await allDays.count();
    console.log("Total Days " + totalDays);
    
    //await page.waitForTimeout(5000);
    
    let allMonths = await page.locator('#month option');
    const totalMonths = await allMonths.count();
    console.log("Total Months " + totalMonths);
    
    
    //await page.waitForTimeout(5000);
    
    let allYears = await page.locator('#year option');
    const totalYears = await allYears.count();
    console.log("Total Years " + totalYears);
    
    
    //await page.waitForTimeout(5000);

    console.log("All Months");
    for(let i=0; i< await totalMonths;i++)
    {
        const text = await allMonths.nth(i).innerText();
        console.log( (i+1) + "." + text);
    }
    
    
    const allDayValues = await page.locator('#day option').allTextContents();
    console.log(allDayValues);
    
});