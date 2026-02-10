import { test, expect } from "playwright/test";
import { HomePage } from "../Pages/HomePage.po";
import { SignupLoginPage } from "../Pages/SignupPage.po";

const userData = require("../tests/test-data/userData.json");
test("Register User using POM", async ({ page }) => {
  const home = new HomePage(page);
  const signup = new SignupLoginPage(page);

  await home.navigate();
  await home.homeImage;
  await home.clickSignupLogin();
  await home.newUserSignup;

  await signup.verifyNewUserSignup();
  await signup.ExistingSignupDetails(userData.name, userData.email);
  await signup.clickSignup();

  await signup.ExistingMail();
});
