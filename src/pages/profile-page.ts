import { type Locator, type Page } from "playwright";

export class profilePage {
  readonly page: Page;
  readonly url = "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard";
  readonly profileButton: Locator;
  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly ageInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // prettier-ignore
    this.profileButton = page.locator("button[data-testid='toggle-edit-profile-button']");
    this.firstnameInput = page.locator("input[data-testid='chage-name-input']");
    this.lastnameInput = page.locator("input[data-testid='chage-surname-input']");
    this.emailInput = page.locator("input[data-testid='chage-email-input']");
    this.phoneInput = page.locator("button[data-testid='chage-phone-input']");
    this.ageInput = page.locator("input[data-testid='chage-age-input']");
    this.saveButton = page.locator("button[data-testid='save-changes-button']");
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async clickProfileButton() {
    await this.profileButton.click();
  }

  async fillFirstname(firstname: string) {
    await this.firstnameInput.fill(firstname);
    return this;
  }

  async fillLastname(lastname: string) {
    await this.lastnameInput.fill(lastname);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }

  async fillPhone(phone: string) {
    await this.emailInput.fill(phone);
    return this;
  }

  async fillAge(age: string) {
    await this.emailInput.fill(age);
    return this;
  }

  async clickSave() {
    await this.saveButton.click();
  }
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
