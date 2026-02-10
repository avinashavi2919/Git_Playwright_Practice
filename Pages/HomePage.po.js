import { expect } from "@playwright/test";
exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.homeImage = page.locator('img[alt="Website for automation practice"]');
    this.signupLoginBtn = page.locator('a[href="/login"]');
  }

  async navigate() {
    await this.page.goto("https://automationexercise.com/");
  }

  async verifyHomeVisible() {
    await expect(this.page).toHaveTitle("Automation Exercise");
    await expect(this.homeImage).toBeVisible();
  }

  async clickSignupLogin() {
    await this.signupLoginBtn.click();
  }
};
