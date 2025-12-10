import { test, expect } from '@playwright/test';
import path from 'path';

//Not Wroking due to unstable page.
test.skip('Single and Combo Key Press', async ({ page }) => {
  await page.goto('https://www.google.com/',{
      waitUntil: 'domcontentloaded'
  });
  //await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();
  
    // --- FIX: dismiss popup if visible ---
  const notInterested = page.getByRole('button', { name: 'Not interested' });
  if (await notInterested.isVisible()) {
    await notInterested.click();
  }

  await page.getByRole('combobox').type("Facebook");
  
  await page.keyboard.press("Control+A");
  
  await page.waitForTimeout(3000);
  
  await page.keyboard.press("Control+X");
  
  await page.keyboard.press("Shift+A");
  
  await page.waitForTimeout(3000);
  
  //await page.keyboard.press("Enter");
  
  await page.keyboard.press("Backspace");
 
  await page.getByRole('combobox').type("Hello World!");
  
  await page.getByRole('combobox').focus();
  
  await page.keyboard.press("ArrowLeft");
  
  await page.keyboard.down("Shift");
  
  await page.getByRole('combobox').focus();
  
  for(let i=0;i<6;i++)
  {
      await page.keyboard.press("ArrowLeft");
  }
  
  await page.keyboard.up("Shift");
  
  await page.keyboard.press("Backspace");
  //const text = await page.getByRole('combobox').inputValue();
  
  
  
  //await page.keyboard.press('Home');
  
/*
  
  for(let i=0;i<text.length-1;i++)
  {
    await page.keyboard.press("ArrowRight");
  }
  
  for(let i=text.length-1;i >= ' World'.length; i++)
  {
     await  page.keyboard.press("Backspace");
  }
 
  const text2 = await page.getByRole('combobox').inputValue();
  
  //Selecting 'brown frog' from entire statement
  await page.keyboard.type('a quick brown frog jumped over lazy fox');
  
  //await page.focus('textarea[name="q"]');
  await page.getByRole('combobox').focus();
  
  await page.keyboard.press('Home');
  
  for(let i=0; i<8 ; i++)
  {
      await page.keyboard.press("Shift+ArrowRight");
  }
  
  await page.keyboard.down("Shift");
  
  for(let i=0; i<10; i++)
  {
      await page.keyboard.press("ArrowRight");
  }
  
  await page.keyboard.up("Shift");
  
  await page.waitForTimeout(3000);
  */
  
});