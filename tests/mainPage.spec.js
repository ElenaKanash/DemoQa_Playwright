import { test, expect } from "@playwright/test";

test.describe('Main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/');
  })

  test('Check one element', async ({ page }) => {
    //await page.locator('.card:nth-child(2)').click();
    await page.getByText('Forms').click();

    await expect(page).toHaveURL('https://demoqa.com/forms')
  });

  test('Check any element', async ({ page }) => {
    const expectedCards = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
    const cardElements = await page.locator('div.card').all();

    expect(cardElements.length).toBe(expectedCards.length);

    for (let i = 0; i < cardElements.length; i++) {
      const elementText = await cardElements[i].textContent();
      expect(elementText).toEqual(expectedCards[i]);
    }
  });

  test('Check any element with tohaveText method', async ({ page }) => {
    const expectedCards = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
    const cardElements = await page.locator('.category-cards .card');
    //console.log(await cardElements.allInnerTexts());
    await expect(cardElements).toHaveCount(6);
    await expect(cardElements).toHaveText(expectedCards);
  });

});