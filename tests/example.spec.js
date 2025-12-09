// @ts-check
/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title to contain substring.
  await expect(page).toHaveTitle(/The Internet/);
});

test('navigate to Dropdown Testing page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Click the AB Testing link.
  await page.getByRole('link', { name: 'Dropdown' }).click();

  // Expects page heading to contain "A/B Test"
  await expect(page.locator('h3')).toHaveText(/Dropdown List/);
});



