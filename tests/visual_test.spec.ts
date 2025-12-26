/** @format */

import { testUserPatrik } from "../src/utils/test_user.ts";
import { expect, test } from "playwright/test";
import { loginE2E } from "../src/helpers/loginE2E.ts";
import { ProfilePage } from "../src/pages/profile_page.ts";

test("Visual test of profile", async ({ page }) => {
  await loginE2E(page, testUserPatrik.usernamepatrik, testUserPatrik.passwordpatrik);
  const profilePage = new ProfilePage(page);
  await profilePage.clickProfileButton();
  await expect(page).toHaveScreenshot("visual_test.png");
});
