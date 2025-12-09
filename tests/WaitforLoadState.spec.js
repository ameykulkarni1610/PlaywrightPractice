import { test, expect } from '@playwright/test';
import path from 'path';

test('Wait for Load State', async ({ page }) => {
  //await page.goto('https://the-internet.herokuapp.com');
   await page.goto("https://freelance-learn-automation.vercel.app/login");

  //await page.getByRole('link', {name: 'Checkboxes'}).click();
  await page.getByText("New User? Signup").click();
  
  await page.waitForLoadState("networkidle");
  
  const checkboxes = await page.locator("//input[@type='checkbox']").count();
  
  //console.log("checkboxes :" + checkboxes);
 
  await expect(checkboxes).toBe(13);
});