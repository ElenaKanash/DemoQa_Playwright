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

    let tableRows = page.getByRole('rowgroup');
    await expect(tableRows).toHaveCount(10);

    await page.getByLabel('rows per page').selectOption('5');
    await expect(tableRows).toHaveCount(5);
  });

  test('Add new User in the row of the table', async ({ page }) => {
    await page.getByRole('button', { name: 'Add' }).click();

    await page.getByPlaceholder('First Name').fill('Ivan');
    await page.getByPlaceholder('Last Name').fill('Ivanov');
    await page.getByPlaceholder('name@example.com').fill('Ivan@example.com');
    await page.getByPlaceholder('Age').fill('25');
    await page.getByPlaceholder('Salary').fill('1000');
    await page.getByPlaceholder('Department').fill('QA department');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByRole('gridcell')).toContainText(['Ivan', 'Ivanov', '25',
      'Ivan@example.com', '1000', 'QA department']);
  });

});