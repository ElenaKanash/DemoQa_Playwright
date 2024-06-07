import { test, expect } from "@playwright/test";

test.describe('Date Picker', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/' + 'date-picker');
    /* await page.goto('/');
    await page.getByText('Elements').click();
    await page.getByText('Widgets').click();
    await page.getByText('Date Picker').click();
    await expect(page).toHaveURL('/' + 'date-picker'); */
  })


  test('Select date (day, month, year)', async ({ page }) => {
    await page.locator('#datePickerMonthYearInput').click();
    await page.locator('.react-datepicker__month-select').selectOption('January');
    await page.locator('.react-datepicker__year-select').selectOption('2025');
    await page.getByLabel('Choose Wednesday, January 1st, 2025').click();

    await expect(page.locator('#datePickerMonthYearInput')).toHaveValue('01/01/2025');
  });

})
