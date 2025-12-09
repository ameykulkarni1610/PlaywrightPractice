import { test, expect } from '@playwright/test';
import path from 'path';
import testData from '../testdata.json';
import users from '../datadriventest.json';

//console.log("Loaded users:", users);
/*test.describe("Data Driven Login Test", function()
{
    for(const user of users)
    {
        test.describe(`Login with users ${user.id}`, function ()
        {
            test('Login to Application',async ({page}) => {
                
                await page.goto(testData.url.herokuapp);
                
                await page.getByRole('link', {name: 'Form Authentication'}).click();
                
                await page.getByLabel('Password').fill(user.password);
            });
        })
    }
});

*/


test.describe('Data Driven Testing', () => {

  for (const user of users) {

    test(`Login test for user: ${user.username}`, async ({ page }) => {
      await page.goto(testData.url.herokuapp);

      await page.getByRole('link', { name: 'Form Authentication' }).click();

      await page.getByLabel('Username').fill(user.username);
      await page.getByLabel('Password').fill(user.password);

      // Add assertion to complete the test
      await expect(page.locator('#username')).toHaveValue(user.username);
    });
  }

});