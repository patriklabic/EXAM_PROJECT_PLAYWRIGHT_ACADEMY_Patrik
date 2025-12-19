import { type Locator, type Page } from "playwright";
import { testUser } from "../utils/test-user.ts";

export class RegisterPage {
  readonly page: Page;
  readonly url = "https://tegb-frontend-88542200c6db.herokuapp.com/register";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly emailInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("input[data-testid='username-input']");
    this.passwordInput = page.locator("input[data-testid='password-input']");
    this.emailInput = page.locator("input[data-testid='email-input']");
    this.registerButton = page.locator("button[data-testid='submit-button']");
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async clickRegister() {
    await this.registerButton.click();
  }
  /*
  async register(username: string, password: string, email: string) {
    await this.open();
    await this.fillUsername(testUser.username);
    await this.fillUsername(testUser.password);
    await this.fillEmail(testUser.email);

  
    await this.page.fill(th, username);
    await this.page.fill("#password", password);
    await this.page.fill("#email", email);
    await this.page.click('button[type="submit"]');
  */
}

/* 
// src/pages/pmtool/login_page.ts
import { Locator, Page, test, expect } from "@playwright/test";
import { DashboardPage } from "./dashboard_page.ts";
import { LostPasswordPage } from "./lost_password_page.ts";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly passwordForgottenAnchor: Locator;
  readonly pageHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
    this.passwordForgottenAnchor = page.locator("#forget_password");
    this.pageHeader = page.locator("h3.form-title");
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin() {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async clickPasswordForgotten() {
    await this.passwordForgottenAnchor.click();
    return new LostPasswordPage(this.page);
  }

  async login(username: string, password: string): Promise<DashboardPage> {
    await test.step("Login to Pmtoll", async () => {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLogin();
    });
    return new DashboardPage(this.page);
  }

  async pageHeaderHasText(headerText: string): Promise<LoginPage> {
    await expect(this.pageHeader).toHaveText(headerText);
    return this;
  }
}




*/
