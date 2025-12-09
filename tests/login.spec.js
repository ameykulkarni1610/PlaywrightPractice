import {test, expect} from '@playwright/test';
//const browser = await chromium.launch({headless: false});
//test.setTimeout(60000);

test.use({
    video: 'on',
    screenshot: 'on',
    trace: 'on'
   });

test('Valid Login',async function({page}){
    await page.goto("https://the-internet.herokuapp.com/login");
    
    await page.getByLabel('Username').fill('tomsmith');
   // await page.locator("input[name='login']").fill('test@example.com');
    
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    //await page.locator("input[name='password']").fill('test@123');
    
    //GitHub Button Tag
    await page.locator("//button[@type='submit']").click();
    
   //const url =  await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
   await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
   
   console.log("url is " + page.url());
   
   await page.getByRole('link', { name: 'Logout' }).click();
   //await page.locator("//a[@href='/logout']").click();
   await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");
    console.log("url is " + page.url());
   //await page.pause();
   //https://github.com/
});

//page.toHaveURL() - this method does not return any value. 
                 //  It only checks whether it is expected url is correct or not. 