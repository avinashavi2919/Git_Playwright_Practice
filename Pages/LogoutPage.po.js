import { expect } from "@playwright/test";
exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutBtn = page.locator('//a[@href="/logout"]');
  }
  async ClickonLogout() {
    await this.logoutBtn.click();
  }
};
