import { test, expect} from "@playwright/test";

test.describe('Main page', () => {
  test('Check one element', async({page}) => {
    await page.goto('https://demoqa.com/');
    //await page.locator('.card:nth-child(2)').click();
    await page.getByText('Forms').click();

    await expect(page).toHaveURL('https://demoqa.com/forms')
  });
  
});