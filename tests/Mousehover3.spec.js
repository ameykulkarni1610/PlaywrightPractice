import { test, expect } from '@playwright/test';

test('Simple Mouse Hover', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  //await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('link', {name: 'Hovers'}).click();
  
  //hover 1st Image
  await page.locator('.figure img').first().hover();
  
  await page.waitForTimeout(2000);
  
  //hover to 2nd Image
  const secondFigure = page.locator('.figure').nth(1);
  await secondFigure.locator('img').hover();
  
  await page.waitForTimeout(2000);
  
   // Expect figcaption to appear
  await expect(secondFigure.locator('.figcaption')).toBeVisible();
  
  //const thirdFigure = page.locator('.figure', { hasText: 'name: user3' });
  //await thirdFigure.locator('img').hover();
  await page.getByAltText("User Avatar").nth(2).hover();
  
  await page.waitForTimeout(2000);

});