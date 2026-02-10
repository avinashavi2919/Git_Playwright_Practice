import { test, expect } from "playwright/test";
import { HomePage } from "../Pages/HomePage.po";
import { SignupLoginPage } from "../Pages/SignupPage.po";
import { AccountInfoPage } from "../Pages/AccountInfoPage.po";
import { AccountCreatedPage } from "../Pages/AccountCreatedPage.po";
import { DeleteAccountPage } from "../Pages/DeleteAccountPage.po";

const userData = require("../tests/test-data/userData.json");
test("Register User using POM", async ({ page }) => {
  const home = new HomePage(page);
  const signup = new SignupLoginPage(page);
  const accountInfo = new AccountInfoPage(page);
  const accountCreated = new AccountCreatedPage(page);
  const deleteAccount = new DeleteAccountPage(page);

  await home.navigate();
  await home.homeImage;
  await home.clickSignupLogin();
  await home.newUserSignup;

  await signup.verifyNewUserSignup();
  await signup.enterSignupDetails();
  await signup.clickSignup();

  await accountInfo.verifyAccountInfoVisible();
  await accountInfo.fillAccountInfo(userData);
  await accountInfo.clickCreateAccount();

  await accountCreated.verifyAccountCreated();
  await accountCreated.clickContinue();
  await accountCreated.verifyLoggedIn(userData.name);

  await deleteAccount.clickDeleteAccount();
  await deleteAccount.verifyAccountDeleted();
  await accountCreated.clickContinue();
});
