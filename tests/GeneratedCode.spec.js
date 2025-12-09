import { test, expect } from '@playwright/test';

test('Auto Generated Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  //await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  //await expect(page.getByRole('link', { name: '×' })).toBeVisible();

  await page.getByRole('link', { name: 'Logout' }).click();
});
