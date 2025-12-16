import { Page } from "playwright";
import { LoginPage } from "../pages/login-page.ts";

export async function loginE2E(page: Page, username: string, password: string) {
  const loginPage = new LoginPage(page);
  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com");
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
  await loginPage.clickLogin();
}
