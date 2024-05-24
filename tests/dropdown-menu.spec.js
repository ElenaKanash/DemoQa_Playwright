import { test, expect } from "@playwright/test";

test.describe('Dropdown menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
  })

  test('Dropdown menu "Elements"', async ({ page }) => {
    const expectedDropdownMenuText = [
      'Text Box',
      'Check Box',
      'Radio Button',
      'Web Tables',
      'Buttons',
      'Links',
      'Broken Links - Images',
      'Upload and Download',
      'Dynamic Properties'
    ]
    await page.getByText('Elements').click();
    const dropdownMenuList = page.locator('.element-list').first().locator('.menu-list li');
    //const dropdownMenuText = await dropdownMenuList.allInnerTexts();

    await expect(dropdownMenuList).toHaveCount(9);
    await expect(dropdownMenuList).toHaveText(expectedDropdownMenuText);
  });

});