import { test, expect } from '@playwright/test';
import path from 'path';

test('Uploading File in Playwright', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  //await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('link', {name: 'File Upload'}).click();
  
  //const filePath = path.join("E:/JavaScript/Promises", "promises.txt");

  //await page.locator('#file-upload').setInputFiles(filePath);
  //await page.locator('#file-upload').setInputFiles("E:/JavaScript/Promises/promises.txt");
  //await page.locator('#file-upload').setInputFiles("./upload/promises.txt");
  
  await page.locator('#file-upload').setInputFiles(path.join("E:/JavaScript/Promises",'promises.txt'));
  
  await page.locator('#file-submit').click();
  
  await expect(page.getByText('File Uploaded!')).toBeVisible();
  
  //await expect(page.locator("//h3")).toHaveText('File Uploaded!');
});