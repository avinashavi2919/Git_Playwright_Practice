import { expect } from "@playwright/test";
import data from "../tests/test-data/userData.json";
exports.ContactUsPage = class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.ClickContactUs = page.locator('//a[@href="/contact_us"]');
    this.GetInTouch = page.locator('h2:has-text("Get In Touch")');
    this.NameInput = page.locator('//input[@data-qa="name"]');
    this.emailInput = page.locator('//input[@data-qa="email"]');
    this.SubjectInput = page.locator('//input[@data-qa="subject"]');
    this.MessageInput = page.locator('//textarea[@data-qa="message"]');
    this.UploadFile = page.locator('//input[@type="file"]');
    this.submitBtn = page.locator('//input[@data-qa="submit-button"]');
    this.SuccessMeasage = page.locator(
      '//div[@class="status alert alert-success"]'
    );
    this.HomeBtn = page.locator('//a[@class="btn btn-success"]');
  }
  async clickinOnContactUs() {
    await this.ClickContactUs.click();
  }
  async VerifyGetInTouchVisible() {
    await expect(this.GetInTouch).toBeVisible();
  }
  async filContactform() {
    await this.NameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.SubjectInput.fill(data.subject);
    await this.MessageInput.fill(data.message);
  }
  async FileUpload() {
    await this.UploadFile.setInputFiles("tests/test-data/pic1.png");
  }
  async submitBtnform() {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.submitBtn.click();
  }
  async verifySuccessMessage() {
    await expect(this.SuccessMeasage).toHaveText(
      "Success! Your details have been submitted successfully."
    );
  }
  async navigateHome() {
    await this.HomeBtn.click();
  }
};
