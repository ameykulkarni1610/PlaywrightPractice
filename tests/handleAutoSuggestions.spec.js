import { test, expect } from '@playwright/test';
import path from 'path';


test('handling Auto Suggestion using keyboard ', async ({ page }) => {
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
  
  //await page.waitForSelector("//div[@class='matches vertical']");
  
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  
  await page.keyboard.press("Enter");
  await page.waitForTimeout(3000);
  //await page.locator("//span[@class='match']").
});


test.only('handling Auto-Suggestion Using loop', async ({ page }) => {
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
  
  //await page.waitForSelector("//div[@class='matches vertical']");
  
  const allSuggestions = await page.locator("li.sbct");
  
  
  console.log("Total suggestions found:", await allSuggestions.count());
  
  for(let i=0;i< await allSuggestions.count(); i++)
  {
      const text = await allSuggestions.nth(i).textContent();
      
      if(text.toLowerCase().includes('download'))
      {
          await allSuggestions.nth(i).click();
          break;
      }
  }

});