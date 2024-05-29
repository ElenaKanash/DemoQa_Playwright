import { test, expect } from "@playwright/test";

test.describe('Web Table', () => {

  test.beforeEach(async ({ page }) => {
    /* await page.goto('/');
    await page.getByText('Elements').click();
    await page.getByText('Web Tables').click();
    await expect(page).toHaveURL('https://demoqa.com/webtables'); */

    await page.goto('/' + 'webtables');
  })


  test('Сhange the number of rows in the table', async ({ page }) => {

    let tableRows =  page.getByRole('rowgroup');
    await expect(tableRows).toHaveCount(10);

    await page.getByLabel('rows per page').selectOption('5');
    await expect(tableRows).toHaveCount(5);
  });

  

});