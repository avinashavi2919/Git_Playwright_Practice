import { expect } from "@playwright/test";
import data from "../tests/test-data/userData.json";
exports.SignupLoginPage = class SignupLoginPage {
  constructor(page) {
    this.page = page;

    this.newUserSignup = page.locator('h2:has-text("New User Signup!")');
    this.nameInput = page.locator('input[placeholder="Name"]');
    this.emailInput = page.locator('input[name="email"]').last();
    this.signupButton = page.locator('//button[@data-qa="signup-button"]');
    this.EmailExist = page.locator(
      'p:has-text("Email Address already exist!")'
    );
  }

  async verifyNewUserSignup() {
    await expect(this.newUserSignup).toBeVisible();
  }

  async enterSignupDetails(name, email) {
    const emailRandom = "test" + Date.now() + "@gmail.com";
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(emailRandom);
  }
  async ExistingSignupDetails(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
  }

  async clickSignup() {
    await this.signupButton.click();
  }
  async ExistingMail() {
    await this.EmailExist.waitFor();
  }
};
