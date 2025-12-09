import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 2 });   // only this file/tests will retry

test('the retries', async ({ page }) => {
  const number = await Math.ceil(Math.random() * 10);
  await expect(number).toBeLessThanOrEqual(3);
  // your test logic
});
