import { test, expect } from "@playwright/test";

test.describe('Web Table', () => {

  test.beforeEach(async ({ page }) => {
    /* await page.goto('https://demoqa.com/');
    await page.getByText('Elements').click();
    await page.getByText('Web Tables').click()

    await expect(page).toHaveURL('https://demoqa.com/webtables'); */

    await page.goto('https://demoqa.com/webtables');
  })


  test('Add one row to the table', async ({ page }) => {

  });

});