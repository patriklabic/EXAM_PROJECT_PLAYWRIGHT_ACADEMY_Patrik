/*
. Atomické testy
Vytvořte Atomické testy na Dashboard.

Otestujte minimálně tyto oblasti:
Hlavička
Levé menu
Obsah dashboardu (účty, profil)

Není nutné testovat samotnou změnu profilových dat (to už je pokryté v E2E).

Atomické testy by měly obsahovat:

kontrolu viditelnosti/existence prvků
U statických prvků (nemění se jim text) kontrola textu
základní kontrolu funkcionality (např. kliknutí na odhlášení - zobrazí se přihlašovací stránka).



*/

import { expect, test } from "playwright/test";
import { ProfilePage } from "../src/pages/profile-page.ts";
import { loginE2E } from "../src/helpers/loginE2E.ts";

test.beforeEach(async ({ page }) => {
  await loginE2E(page, "patriklabic", "123456");
  await expect(page).toHaveURL(
    "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard"
  );
});

test("Atomic test Header section", async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await expect.soft(profilePage.headerLogo).toBeVisible();
  await expect.soft(profilePage.logoutButton).toBeVisible();
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
