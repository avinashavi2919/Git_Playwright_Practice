import { expect } from "@playwright/test";
import dataInfo from "../tests/test-data/userData.json";
exports.AccountInfoPage = class AccountInfoPage {
  constructor(page) {
    this.page = page;

    this.accountInfoHeader = page.locator(
      'b:has-text("Enter Account Information")'
    );
    this.titleMr = page.locator('//input[@value="Mr"]');
    this.password = page.locator("#password");
    this.days = page.locator("#days");
    this.months = page.locator("#months");
    this.years = page.locator("#years");

    this.newsletter = page.locator('input[name="newsletter"]');
    this.optin = page.locator('input[name="optin"]');

    this.firstName = page.locator("#first_name");
    this.lastName = page.locator("#last_name");
    this.company = page.locator("#company");
    this.address1 = page.locator("#address1");
    this.address2 = page.locator("#address2");
    this.country = page.locator("#country");
    this.state = page.locator("#state");
    this.city = page.locator("#city");
    this.zipcode = page.locator("#zipcode");
    this.mobile = page.locator("#mobile_number");

    this.createAccountBtn = page.locator('button[data-qa="create-account"]');
  }

  async verifyAccountInfoVisible() {
    await expect(this.accountInfoHeader).toBeVisible();
  }

  async fillAccountInfo(data) {
    await this.titleMr.check();
    await this.password.fill(dataInfo.password);
    await this.days.selectOption(dataInfo.dob.day);
    await this.months.selectOption(dataInfo.dob.month);
    await this.years.selectOption(dataInfo.dob.year);

    await this.newsletter.check();
    await this.optin.check();

    await this.firstName.fill(dataInfo.address.firstName);
    await this.lastName.fill(dataInfo.address.lastName);
    await this.company.fill(dataInfo.address.company);
    await this.address1.fill(dataInfo.address.address1);
    await this.address2.fill(dataInfo.address.address2);
    await this.country.selectOption(dataInfo.address.country);
    await this.state.fill(dataInfo.address.state);
    await this.city.fill(dataInfo.address.city);
    await this.zipcode.fill(dataInfo.address.zipcode);
    await this.mobile.fill(dataInfo.address.mobile);
  }

  async clickCreateAccount() {
    await this.createAccountBtn.click();
  }
};
