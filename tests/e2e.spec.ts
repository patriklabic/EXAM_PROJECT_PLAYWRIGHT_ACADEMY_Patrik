import { test, expect } from "@playwright/test";
import { RegisterPage } from "../src/pages/register-page.ts";
import { LoginPage } from "../src/pages/login-page.ts";
import { ProfilePage } from "../src/pages/profile-page.ts";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com");
  await loginPage.fillUsername("patriklabic");
  await loginPage.fillPassword("123456");
  await loginPage.clickLogin();
});

test("1.E2E Register new user on FE", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  //await registerPage.open();
  await registerPage.fillUsername("USER NAME need take From API"); //!dodělat
  await registerPage.fillPassword("API PASSWORD, need to be finnish"); //!dodělat
  await registerPage.fillEmail("API EMAIL, need to be finnish"); //!dodělat
  await registerPage.clickRegister();
});

test("2.E2E API new bank account.", async ({ page }) => {});

test("3.E2E New user login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com");
  await loginPage.fillUsername("USER NAME need take From API"); //!dodělat
  await loginPage.fillPassword("API PASSWORD, need to be finnish"); //!dodělat
  await loginPage.clickLogin();
});

test("4.E2E Profile fill", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  //await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
  await profilePage.clickProfileButton();
  await profilePage.fillFirstname("New First Name");
  await profilePage.fillLastname("New Last Name");
  await profilePage.fillEmail("New email");
  await profilePage.fillPhone("123456");
  await profilePage.fillAge("25");
  await profilePage.clickSave();
});

test("5.E2E Check profile fill", async ({ page }) => {});

test("6.E2E Check bank account balance", async ({ page }) => {});

test("7.E2E User log-out", async ({ page }) => {});
