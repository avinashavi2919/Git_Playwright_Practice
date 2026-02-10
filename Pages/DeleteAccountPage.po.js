import { expect } from "@playwright/test";
exports.DeleteAccountPage = class DeleteAccountPage {
  constructor(page) {
    this.page = page;

    this.deleteAccountLink = page.locator('a[href="/delete_account"]');
    this.accountDeletedText = page.locator('b:has-text("Account Deleted!")');
  }

  async clickDeleteAccount() {
    await this.deleteAccountLink.click();
  }

  async verifyAccountDeleted() {
    await expect(this.accountDeletedText).toBeVisible();
  }
};
