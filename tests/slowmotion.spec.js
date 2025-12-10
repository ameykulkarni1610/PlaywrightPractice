/*const {chromium} = require('playwright');

(async() => {
   const browser = await chromium.launch({headless:false,slowMo:1000});
   const page = await browser.newPage();
   await page.goto('https://www.google.com');
   await page.fill('input[name="facebook"]', 'Playwright slow-mo');
   await page.keyboard.press('Enter');
})();
*/

const { test } = require('@playwright/test');

test.skip('Google slow-mo search', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'Playwright slow-mo');    //q = query. It is an attrbute of style name of input tag
  await page.keyboard.press('Enter');
});


//<input name="q"> It is a fixed attribute built into the webpage.