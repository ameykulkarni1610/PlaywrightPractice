import { test, expect } from '@playwright/test';
import path from 'path';

test('Handling Alerts', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  //await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('link', {name: 'JavaScript Alerts'}).click();
  
  
  //Fires automatically when any dialog box appears
  page.on('dialog', async(msg) => {
 /* await expect(msg.type()).toContain("alert");   //to check whether its an alert box
  console.log("Dialog Text:", msg.message());  //or msg.message();
  await expect(msg.message()).toContain("I am a JS Alert");
  await msg.accept();  //msg.miss();   To say yes or no to confirm alerts
  
 */
  const type = msg.type();
  const message = msg.message();
  
   if (type === 'alert')
   {
    console.log("Dialog Text:", message);
    await expect(msg.message()).toContain("I am a JS Alert");
    await msg.accept();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
   }
   else if(type === 'confirm')
   {
    console.log("Dialog Text:", message);
    await expect(msg.message()).toContain("I am a JS Confirm");
    await msg.accept();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
   }
   else if(type === 'prompt')
   {
    console.log("Dialog Text:", message);
    await expect(msg.message()).toContain("I am a JS prompt");
    await msg.accept("Hello World");
    await expect(page.locator('#result')).toHaveText('You entered: Hello World');
   }
});

 
  
  
  await page.locator("//button[text()='Click for JS Alert']").click();
  
  await page.locator("//button[text()='Click for JS Confirm']").click();
  
  await page.locator("//button[text()='Click for JS Prompt']").click();
  
  //await expect(
  
});