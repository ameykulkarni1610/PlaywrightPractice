import { test, expect } from '@playwright/test';
import path from 'path';

test('Single Key Press', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  //await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('link', {name: 'Key Presses'}).click();
  
  await page.locator('#target').press('Enter');
  
  await page.waitForTimeout(3000);
  
  await page.locator('#target').press('Space');
  
  await page.waitForTimeout(3000);
});