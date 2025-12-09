import { test, expect } from "@playwright/test";

test("1.E2E Register new user on FE", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("2.E2E API new bank account.", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("3.E2E New user login", async ({ page }) => {});

test("4.E2E Profile fill", async ({ page }) => {});

test("5.E2E Check profile fill", async ({ page }) => {});

test("6.E2E Check bank account balance", async ({ page }) => {});

test("7.E2E User log-out", async ({ page }) => {});
