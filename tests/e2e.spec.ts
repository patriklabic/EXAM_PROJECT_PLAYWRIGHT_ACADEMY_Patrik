/** @format */

import { test, expect } from "@playwright/test";
import { RegisterPage } from "../src/pages/register_page.ts";
import { LoginPage } from "../src/pages/login_page.ts";
import { loginE2E } from "../src/helpers/loginE2E.ts";
import { faker } from "@faker-js/faker";
import { testUserRegister } from "../src/utils/test_user.ts";
import { ProfilePage } from "../src/pages/profile_page.ts";
import { register } from "module";
import { testUser24 } from "../src/utils/test_user.ts";

test("1.E2E Register new user on FE", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  //await registerPage.open();
  await registerPage.fillUsername(testUserRegister.username);
  await registerPage.fillPassword(testUserRegister.password);
  await registerPage.fillEmail(testUserRegister.email);
  await registerPage.clickRegister();
  await expect(page.getByTestId("success-message")).toBeVisible();
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

test("3.E2E New user login", async ({ page }) => {
  await loginE2E(page, testUser24.username24, testUser24.password24);
  await expect(page).toHaveURL("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
});

test("4.E2E Profile fill", async ({ page }) => {
  await loginE2E(page, testUser24.username24, testUser24.password24);
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

test("5.E2E Check profile fill", async ({ page }) => {
  await loginE2E(page, testUser24.username24, testUser24.password24);
  const profilePage = new ProfilePage(page);
  await profilePage.clickProfileButton();
  await expect(profilePage.firstnameInput).toHaveValue("New First Name");
  await expect(profilePage.lastnameInput).toHaveValue("New Last Name");
  await expect(profilePage.emailInput).toHaveValue("New email");
  await expect(profilePage.phoneInput).toHaveValue("123456");
  await expect(profilePage.ageInput).toHaveValue("25");
});

test("6.E2E Check bank account balance", async ({ page }) => {
  await loginE2E(page, testUser24.username24, testUser24.password24);
  const profilePage = new ProfilePage(page);
  await expect(profilePage.accountTableRow0Balance).toBeVisible();

  await expect(profilePage.accountTableRow0Balance).toContainText("10000.0");
});

test("7.E2E User log-out", async ({ page }) => {
  await loginE2E(page, testUser24.username24, testUser24.password24);
  const profilePage = new ProfilePage(page);
  await profilePage.logOut();
  await expect(page).toHaveURL("https://tegb-frontend-88542200c6db.herokuapp.com/");
});
