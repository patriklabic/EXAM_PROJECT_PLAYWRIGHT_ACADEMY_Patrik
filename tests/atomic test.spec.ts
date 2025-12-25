/** @format */

import { expect, test } from "playwright/test";
import { ProfilePage } from "../src/pages/profile-page.ts";
import { loginE2E } from "../src/helpers/loginE2E.ts";

test.beforeEach(async ({ page }) => {
  await loginE2E(page, "Jerrell_Kreiger24", "123456");
  await expect(page).toHaveURL("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
});

test("Atomic test Header section", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await expect.soft(profilePage.headerLogo).toBeVisible();
  await expect.soft(profilePage.logoutButton).toBeVisible();
  await expect.soft(profilePage.headerAppName).toBeVisible();
  await expect.soft(profilePage.headerAppName).toHaveText("TEG#B Dashboard");
});

test("Atomic test Left menu", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await expect.soft(profilePage.leftMenuExist).toBeVisible();
});

test("Atomic test Dashboard profile section", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await expect.soft(profilePage.profileButton).toBeVisible();
  await expect.soft(profilePage.profileDetailH2).toBeVisible();
  await expect.soft(profilePage.profileName).toBeVisible();
  await expect.soft(profilePage.profileLastname).toBeVisible();
  await expect.soft(profilePage.profileEmail).toBeVisible();
  await expect.soft(profilePage.profilePhone).toBeVisible();
  await expect.soft(profilePage.profileAge).toBeVisible();
});

test("Atomic test Dashboard account section", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await expect.soft(profilePage.dashboardMainSection).toBeVisible();
  await expect.soft(profilePage.accountButtonAdd).toBeVisible();
  await expect.soft(profilePage.accountSection).toBeVisible();
  await expect.soft(profilePage.accountTableHeadingNumber).toBeVisible();
  await expect.soft(profilePage.accountTableHeadingNumber).toHaveText("Číslo účtu");
  await expect.soft(profilePage.accountTableHeadingBalance).toBeVisible();
  await expect.soft(profilePage.accountTableHeadingBalance).toHaveText("Zůstatek");
  await expect.soft(profilePage.accountTableHeadingType).toBeVisible();
  await expect.soft(profilePage.accountTableHeadingType).toHaveText("Typ účtu");
  await expect.soft(profilePage.accountTableRow0).toBeVisible();
  await expect.soft(profilePage.accountTableRow0Number).toBeVisible();
  await expect.soft(profilePage.accountTableRow0Number).toBeVisible();
  await expect.soft(profilePage.accountTableRow0Type).toBeVisible();
});

test("Atomic test Dashboard footer section", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await expect.soft(profilePage.dashboardFooter).toBeVisible();
  await expect.soft(profilePage.dashboardFooterCopyright).not.toHaveText("");
});

test("Atomic test  User log-out", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await profilePage.logOut();
  await expect(page).toHaveURL("https://tegb-frontend-88542200c6db.herokuapp.com/");
});
