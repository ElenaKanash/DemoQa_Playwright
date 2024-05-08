import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe('Practice Form', () => {
  let firstName = 'Ivan';
  let lastName = 'Ivanov';
  let email = 'q1@gmail.com'
  let firstNameField;
  let lastNameField;
  let mobileNumberField;
  let emailField;

  test.beforeEach(async ({ page }) => {
    firstNameField = page.getByPlaceholder('First Name');
    lastNameField = page.getByRole('textbox', { name: 'Last Name' });
    mobileNumberField = page.getByRole('textbox', 'Mobile Number');
    emailField = page.getByPlaceholder('name@example.com');

    await page.goto('https://demoqa.com/automation-practice-form');
    /*   await page.goto('https://demoqa.com/');    
      await page.getByText('Forms').click();
      await page.getByText('Practice Form').click();*/
  })

  test('Filling Practice Form', async ({ page }) => {
    await firstNameField.fill(firstName);
    await lastNameField.fill(lastName);
    await emailField.fill(email)

    await expect(firstNameField).toHaveValue(firstName);
    await expect(lastNameField).toHaveValue(lastName);
    await expect(emailField).toHaveValue(email);
  });

  test('Validating the form with empty fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(firstNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(mobileNumberField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });


});