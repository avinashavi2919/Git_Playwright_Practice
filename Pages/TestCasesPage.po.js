import { expect } from "@playwright/test";
exports.testcasePage = class testcasePage {
  constructor(page) {
    this.page = page;
    this.testcaseBtn = page.locator('//i[@class="fa fa-list"]').first();
    this.TestcasesText = page.locator('b:has-text("Test Cases")');
  }
  async testcaseBtnClick() {
    await this.testcaseBtn.click();
  }
  async verifytestcasesVisiblie() {
    await this.TestcasesText.waitFor();
  }
};
