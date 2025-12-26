/** @format */

import { type Locator, type Page } from "playwright";

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
}
