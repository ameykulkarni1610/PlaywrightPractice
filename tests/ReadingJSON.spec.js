import { test, expect } from '@playwright/test';
import path from 'path';
import testData from './testdata.json';

test('Reading test data from JSON file', async ({ page }) => {
  await page.goto(testData.url.herokuapp);
  //await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.getByRole('link', {name: 'Form Authentication'}).click();
  //await page.getByText("New User? Signup").click();
  
  
  await page.getByLabel('Username').fill(testData.username);
  // await page.locator("input[name='login']").fill('test@example.com');
    
  await page.getByLabel('Password').fill(testData.password);
    //await page.locator("input[name='password']").fill('test@123');
    
  await page.locator("//button[@type='submit']").click();
});