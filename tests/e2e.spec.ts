import { test, expect } from "@playwright/test";
import { RegisterPage } from "../src/pages/register-page.ts";
import { LoginPage } from "../src/pages/login-page.ts";
import { ProfilePage } from "../src/pages/profile-page.ts";
import { loginE2E } from "../src/helpers/loginE2E.ts";

test.beforeEach(async ({ page }) => {
  await loginE2E(page, "patriklabic", "123456");
});

test("1.E2E Register new user on FE", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  //await registerPage.open();
  await registerPage.fillUsername("USER NAME need take From API"); //!dodělat faker
  await registerPage.fillPassword("API PASSWORD, need to be finnish"); //!dodělat faker
  await registerPage.fillEmail("API EMAIL, need to be finnish"); //!dodělat faker
  await registerPage.clickRegister();
});

test("2.E2E API new bank account.", async ({ request }) => {
  const logingResponse = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
    {
      data: {
        username: "patriklabic",
        password: "123456",
      },
    }
  );
  const loginBody = await logingResponse.json();
  const token = loginBody.access_token;

  const response = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        startBalance: 50000,
        type: "Test",
      },
    }
  );

  expect(response.status()).toBe(201);
});

//?Tohle nejsem jistý, nestačí, že funknční before each a ztoho vyplivající návazné testy fungují, je dobra practise to mít i jako test?

test("3.E2E New user login", async ({ page }) => {
  await loginE2E(page, "patriklabic", "123456");
  await expect(page).toHaveURL(
    "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard"
  );
});

test("4.E2E Profile fill", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await profilePage.clickProfileButton();
  await profilePage.fillFirstname("New First Name");
  await profilePage.fillLastname("New Last Name");
  await profilePage.fillEmail("New email");
  await profilePage.fillPhone("123456");
  await profilePage.fillAge("25");
  await profilePage.clickSave();
  await profilePage.saveProfile();
});

test("5.E2E Check profile fill", async ({ page }) => {});

test("6.E2E Check bank account balance", async ({ page }) => {});

test("7.E2E User log-out", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await profilePage.logOut();
  await expect(page).toHaveURL(
    "https://tegb-frontend-88542200c6db.herokuapp.com/"
  );
});
