/** @format */

import { type Locator, type Page } from "playwright";

export class ProfilePage {
  readonly page: Page;
  readonly url = "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard";
  readonly profileButton: Locator;
  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly ageInput: Locator;
  readonly saveButton: Locator;
  readonly logoutButton: Locator;
  readonly headerLogo: Locator;
  readonly headerAppName: Locator;
  readonly leftMenuExist: Locator;
  readonly profileDetailH2: Locator;
  readonly profileName: Locator;
  readonly profileLastname: Locator;
  readonly profileEmail: Locator;
  readonly profilePhone: Locator;
  readonly profileAge: Locator;
  readonly accountH2: Locator;
  readonly accountButtonAdd: Locator;
  readonly dashboardMainSection: Locator;
  readonly dashboardFooter: Locator;
  readonly dashboardFooterCopyright: Locator;
  readonly accountSection: Locator;
  readonly accountTableHeadingNumber: Locator;
  readonly accountTableHeadingBalance: Locator;
  readonly accountTableHeadingType: Locator;
  readonly accountTableRow0: Locator;
  readonly accountTableRow0Number: Locator;
  readonly accountTableRow0Balance: Locator;
  readonly accountTableRow0Type: Locator;

  constructor(page: Page) {
    this.page = page;
    // prettier-ignore
    this.profileButton = page.locator("button[data-testid='toggle-edit-profile-button']");
    this.firstnameInput = page.locator("input[data-testid='chage-name-input']");
    // prettier-ignore
    this.lastnameInput = page.locator("input[data-testid='chage-surname-input']");
    this.emailInput = page.locator("input[data-testid='chage-email-input']");
    this.phoneInput = page.locator("input[data-testid='chage-phone-input']");
    this.ageInput = page.locator("input[data-testid='chage-age-input']");
    this.saveButton = page.locator("button[data-testid='save-changes-button']");
    this.logoutButton = page.locator("button[data-testid='logout-button']");
    this.headerLogo = page.locator("img[data-testid='logo-img']");
    // prettier-ignore
    this.headerAppName = page.locator("span[data-testid='app-title']");
    this.leftMenuExist = page.locator("aside[class='dashboard-sidebar']");
    // prettier-ignore
    this.profileDetailH2 = page.locator("h2[data-testid='profile-details-title']");
    this.profileName = page.locator("div[data-testid='name']");
    this.profileLastname = page.locator("div[data-testid='surname']");
    this.profileEmail = page.locator("div[data-testid='email']");
    this.profilePhone = page.locator("div[data-testid='phone']");
    this.profileAge = page.locator("div[data-testid='age']");
    this.accountH2 = page.locator("h2[data-testid='accounts-title']");
    // prettier-ignore
    this.accountButtonAdd = page.locator("button[data-testid='add-account-button']");
    // prettier-ignore
    this.dashboardMainSection = page.locator("main[data-testid='dashboard-content']");
    // prettier-ignore
    this.dashboardFooter = page.locator("//footer[@class='dashboard-footer']");
    // prettier-ignore
    this.dashboardFooterCopyright = page.locator("//footer[span='© 2023 Banking App']");
    this.accountSection = page.locator(".accounts");
    // prettier-ignore
    this.accountTableHeadingNumber = page.locator("th[data-testid='account-number-heading']");
    // prettier-ignore
    this.accountTableHeadingBalance = page.locator("th[data-testid='account-balance-heading']");
    // prettier-ignore
    this.accountTableHeadingType = page.locator("th[data-testid='account-type-heading']");
    // prettier-ignore
    this.accountTableRow0 = page.locator("tr[data-testid='account-row-0']");
    // prettier-ignore
    this.accountTableRow0Number = page.locator("td[data-testid='account-number']");
    // prettier-ignore
    this.accountTableRow0Balance = page.locator("td[data-testid='account-balance']");
    // prettier-ignore
    this.accountTableRow0Type = page.locator("td[data-testid='account-type']");
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
    await this.phoneInput.fill(phone);
    return this;
  }

  async fillAge(age: string) {
    await this.ageInput.fill(age);
    return this;
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async saveProfile() {
    await Promise.all([
      this.page.waitForResponse(
        (res) =>
          res.url().includes("https://tegb-backend-877a0b063d29.herokuapp.com/tegb/profile") &&
          res.status() === 200
      ),
      this.saveButton.click(),
    ]);
  }

  async logOut() {
    await this.logoutButton.click();
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
