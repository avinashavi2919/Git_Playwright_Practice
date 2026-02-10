import { expect } from "@playwright/test";
exports.AccountCreatedPage = class AccountCreatedPage {
  constructor(page) {
    this.page = page;

    this.accountCreatedText = page.locator('b:has-text("Account Created!")');
    this.continueBtn = page.locator('a[data-qa="continue-button"]');

    this.loggedInText = (username) =>
      this.page.locator(`a:has-text("Logged in as")`);
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedText).toBeVisible();
  }

  async clickContinue() {
    await this.continueBtn.click();
  }

  async verifyLoggedIn(username) {
    await expect(this.loggedInText(username)).toBeVisible();
  }
};
