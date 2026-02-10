import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage.po";
import { LoginPage } from "../Pages/LoginPage.po";
import userData from "../tests/test-data/userData.json";

test("Login User With InValid Credentials", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.navigate();
  await home.verifyHomeVisible();
  await home.clickSignupLogin();

  await login.LogintoYourAccoutVisible();
  await login.EnteringInValidCreds(
    userData.InvaliEmail,
    userData.InvalidPassword
  );

  await login.InvalidErrorMsg();
});
