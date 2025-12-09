import { test, expect } from '@playwright/test';
import path from 'path';
import testData from '../testdata.json';
import users from '../datadriventest.json';


for(const user of users){
test(`Data Driven Testing - ${user.username}`, async ({ page }) => {
  await page.goto(testData.url.herokuapp);
  //await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.getByRole('link', {name: 'Form Authentication'}).click();
  //await page.getByText("New User? Signup").click();
  
  
  await page.getByLabel('Username').fill(user.username);
  // await page.locator("input[name='login']").fill('test@example.com');
    
  await page.getByLabel('Password').fill(user.password);
    //await page.locator("input[name='password']").fill('test@123');
    
  //await page.locator("//button[@type='submit']").click();
});
}