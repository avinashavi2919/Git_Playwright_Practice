import { expect } from "@playwright/test";
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.LogintoYourAccount = page.locator(
      'h2:has-text("Login to your account")'
    );
    this.EmailAddress = page.locator('//input[@data-qa="login-email"]');
    this.Password = page.locator('//input[@data-qa="login-password"]');
    this.LoginBtn = page.locator('//button[@data-qa="login-button"]');
    this.IncorrectCreds = page.locator(
      'p:has-text("Your email or password is incorrect!")'
    );
  }
  async LogintoYourAccoutVisible() {
    await expect(this.LogintoYourAccount).toBeVisible();
  }
  async ValidCredentials(email, password) {
    await this.EmailAddress.fill(email);
    await this.Password.fill(password);
    await this.LoginBtn.click();
  }
  async EnteringInValidCreds(email, password) {
    await this.EmailAddress.fill(email);
    await this.Password.fill(password);
    await this.LoginBtn.click();
  }
  async InvalidErrorMsg() {
    await this.IncorrectCreds.waitFor();
  }
};
