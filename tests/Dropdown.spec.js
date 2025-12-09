import {test, expect} from '@playwright/test';

test('Dropdowns',async function({page}){
    await page.goto("https://the-internet.herokuapp.com");
    
    await page.getByRole('link', {name: 'Dropdown'}).click();
    
    await page.locator('#dropdown').selectOption({value:"1"});
    await expect(page.locator('#dropdown')).toHaveValue("1");
    
    await page.waitForTimeout(5000);
    
    //await page.locator('#dropdown').selectOption({label:"Please select an option"});
    await expect(page.locator('#dropdown option[value=""]')).toHaveText("Please select an option");
    await expect(page.locator('#dropdown option[value=""]')).toBeDisabled();
    
    await page.waitForTimeout(5000);
    
    //await page.getByText("Option 2").click();   Test will fail. Cannot use getByText inside Dropdown
    // select option 2
    await page.locator('#dropdown').selectOption({ label: "Option 2" });
    await expect(page.locator('#dropdown')).toHaveValue("2");
    
    await page.waitForTimeout(5000);

    await page.locator('#dropdown').selectOption({index : 1 });
    await expect(page.locator('#dropdown')).toHaveValue("1");
    
    await page.waitForTimeout(5000);
    
    const values = await page.locator('#dropdown').textContent();
    
    console.log("all dropdown values : " + values);
    
    await expect(values.includes("Option 3")).toBeFalsy();
    
    //To capture first element of the dropdown
    //let option = await page.$('#dropdown');
    let firstOption = await page.locator('#dropdown option').first();
    
    //To capture all elements inside of the dropdown
    //let allOptions = await page.$$('#dropdown option');
    let allOptions = await page.locator('#dropdown option');
    const totalOptions = await allOptions.count();
    console.log("Total Options : " + totalOptions);
});