/** @format */

import { test, expect } from "@playwright/test";
import { loginE2E } from "../src/helpers/loginE2E.ts";
import { usersDDT } from "../src/utils/test_user.ts";
import { ProfilePage } from "../src/pages/profile_page.ts";

for (const user of usersDDT) {
  test(`E2E Check bank account for ${user.username}`, async ({ page, request }) => {
    await loginE2E(page, user.username, user.password);

    const profilePage = new ProfilePage(page);

    await expect(profilePage.accountTableRow0Balance).toBeVisible();

    await expect(profilePage.accountTableRow0Balance).toHaveText(user.balance);
  });
}
