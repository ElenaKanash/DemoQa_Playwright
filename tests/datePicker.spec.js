import { test, expect } from "@playwright/test";

test.describe('Date Picker', () => {

  test.beforeEach(async ({ page }) => {
    // await page.goto('/' + 'date-picker');
    await page.goto('/');
    await page.getByText('Elements').click();
    await page.getByText('Widgets').click();
    await page.getByText('Date Picker').click();
    await expect(page).toHaveURL('/' + 'date-picker');
  })


  test('Select date (day, month, year) as User', async ({ page }) => {
    await page.locator('#datePickerMonthYearInput').click();
    await page.locator('.react-datepicker__month-select').selectOption('January');
    await page.locator('.react-datepicker__year-select').selectOption('2025');
    await page.getByLabel('Choose Wednesday, January 1st, 2025').click();

    await expect(page.locator('#datePickerMonthYearInput')).toHaveValue('01/01/2025');
  });

  test('Select date with JS method Date', async ({ page }) => {
    await page.locator('#datePickerMonthYearInput').click();
    let date = new Date();
    date.setDate(date.getDate() + 2);  //return the day after tomorrow
    const expectedDay = date.getDate();

    const expectedMonthNumeric = date.toLocaleString('en-US', { month: '2-digit' });
    const expectedMonthStr = date.toLocaleString('en-US', { month: 'long' });

    const pickerLocatorDateTomorrow = `[aria-label*="${expectedMonthStr} ${expectedDay}"]`;
    await page.locator(pickerLocatorDateTomorrow).click();

    const expectedValue = `${expectedMonthNumeric}/0${expectedDay}/2024`;
    console.log(expectedValue)

    await expect(page.locator('#datePickerMonthYearInput')).toHaveValue(expectedValue);
  });

})
