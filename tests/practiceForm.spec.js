import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe('Practice Form', () => {
  let firstName = 'Ivan';
  let lastName = 'Ivanov';
  let email = 'q1@gmail.com';
  let mobileNumber = '1111111111';
  let firstNameField;
  let lastNameField;
  let mobileNumberField;
  let emailField;

  test.beforeEach(async ({ page }) => {
    firstNameField = page.getByPlaceholder('First Name');
    lastNameField = page.getByRole('textbox', { name: 'Last Name' });
    mobileNumberField = page.getByPlaceholder('Mobile Number');
    emailField = page.getByPlaceholder('name@example.com');

    await page.goto('https://demoqa.com/automation-practice-form');
    /*   await page.goto('https://demoqa.com/');    
      await page.getByText('Forms').click();
      await page.getByText('Practice Form').click();*/
  })

  test('Filling Practice Form', async ({ page }) => {
    const genreMale = page.locator('[for="gender-radio-1"]');
    const hobbiesSport = page.locator('[for="hobbies-checkbox-1"]')

    await firstNameField.fill(firstName);
    await expect(firstNameField).toHaveValue(firstName);
    await lastNameField.fill(lastName);
    await expect(lastNameField).toHaveValue(lastName);
    await emailField.fill(email); 
    await expect(emailField).toHaveValue(email);
    await genreMale.check()  
    await expect(genreMale).toBeChecked();
    await mobileNumberField.fill(mobileNumber);
    await expect(mobileNumberField).toHaveValue(mobileNumber);
    await hobbiesSport.check(); 
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect (page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('.h4')).toHaveText('Thanks for submitting the form');

  });

  test('Validating the form with empty fields', async ({ page }) => {    
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(firstNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(mobileNumberField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('[for="gender-radio-1"]')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });


});