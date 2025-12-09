import {test, expect} from '@playwright/test';

test('Verify Error Message',async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    
    await page.getByLabel('Username').fill('tomsmith');
   // await page.locator("input[name='login']").fill('test@example.com');
    
    await page.getByLabel('Password').fill('SuperSecretPassword');
    //await page.locator("input[name='password']").fill('test@123');
    
    await page.getByRole('button' , { name :'Login'}).click();
  
    //Asserting the error Message
    //await expect(page.locator('.flash.error')).toContainText('Your password is invalid!');
    await expect(page.getByText('Your password is invalid!')).toBeVisible();

  
    //Prints the message
    const errorMsg = await page.getByText('Your password is invalid!').innerText();
    //const errorMsg = await page.getByText('Your password is invalid!').textContent();
    //const errorMsg = await page.locator('.flash.error').innerText();
    //const errorMsg = await page.locator('.flash.error').textContent();
    console.log("Captured Error Message : " + errorMsg);
    
    //partial text checking
    await expect(errorMsg.includes("invalid")).toBeTruthy();
    //await expect(page.getByText('Your password is invalid!')).toBeVisible();

    //await expect(page.locator('.flash.error')).toContainText('Your password is invalid!');
    //await expect(page.locator(".flash.error")).toHaveText(/Your password is invalid!/);


    
    //complete text checking
    //expect(errorMsg==='Your password is invalid!×').toBeTruthy();
});


