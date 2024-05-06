import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe('Practice Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    /*   await page.goto('https://demoqa.com/');    
      await page.getByText('Forms').click();
      await page.getByText('Practice Form').click();*/
  })

  test('Filling Practice Form', async ({ page }) => {
    const firstNameField = page.getByPlaceholder('First Name');    
    const firstName = 'Ivan';
    const lastNameField = page.getByRole('textbox', {name: 'Last Name'});
    const lastName = 'Ivanov';

    await firstNameField.fill(firstName);
    await lastNameField.fill(lastName);

    await expect(firstNameField).toHaveValue(firstName);    
    await expect(lastNameField).toHaveValue(lastName);

  });


});