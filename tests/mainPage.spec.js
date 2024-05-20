import { test, expect } from "@playwright/test";

test.describe('Main page', () => {
  test('Check one element', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    //await page.locator('.card:nth-child(2)').click();
    await page.getByText('Forms').click();

    await expect(page).toHaveURL('https://demoqa.com/forms')
  });

  test('Check any element', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    const expectedCards = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
    const cardElements = await page.locator('div.card').all();

    expect(cardElements.length).toBe(expectedCards.length);

    for (let i = 0; i < cardElements.length; i++) {
      const elementText = await cardElements[i].textContent();
      expect(elementText).toEqual(expectedCards[i]);
    }
  });

});