import { test, expect } from '@playwright/test';

const baseApiUrl = 'https://demoqa.com';

const userName = 'Elena';
const password = 'Elena@12345';

test.describe('API testing', () => {
  test('Authorize a user', async ({ request }) => {
    const response = await request.post(`${baseApiUrl}/Account/v1/Authorized`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        userName,
        password,
      },
    });
    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy;
    expect(await response.json()).toEqual(true);
  });

  test('Generate a token', async ({ request }) => {
    const response = await request.post(
      `${baseApiUrl}/Account/v1/GenerateToken`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          userName,
          password,
        },
      }
    );
    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy;
    console.log(await response.json());
    //let token = (await response.json()).token;
    //let expires = (await response.json()).expires;
  });

  test('Login to the "Book Store"', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill(userName);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('button', { name: 'Log Out' })).toBeAttached(
      true
    );

    //save coockie data to state.json to reusing in any tests
    await page.context().storageState({ path: 'state.json' });
  });
});
