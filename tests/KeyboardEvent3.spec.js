import { test, expect } from '@playwright/test';
import path from 'path';

test.setTimeout(100000);
//Not Wroking due to unstable page.
test('Single and Combo Key Press', async ({ page }) => {

 await page.goto('https://the-internet.herokuapp.com');
 
 await page.getByRole('link', {name: 'Form Authentication'}).click();
 
 await page.getByLabel('Username').type("Facebook");
 
  await page.keyboard.press("Control+A");
  
  //await page.waitForTimeout(3000);
  
  await page.keyboard.press("Control+X");
  
  await page.keyboard.press("Shift+A");
  
  //await page.waitForTimeout(3000);
  
  //await page.keyboard.press("Enter");
  
  await page.keyboard.press("Backspace");
  
  await page.getByLabel('Username').type("Hello World!");
  
  await page.getByLabel('Username').focus();
  
  await page.keyboard.press("ArrowLeft");
  
  await page.keyboard.down("Shift");
  
    for(let i=0;i<5;i++)
  {
      await page.keyboard.press("ArrowLeft");
  }
  
  await page.keyboard.up("Shift");
  
  await page.keyboard.press("Backspace");
});

  
  
 
 
  
  
  
 
  
  

  

  
  
