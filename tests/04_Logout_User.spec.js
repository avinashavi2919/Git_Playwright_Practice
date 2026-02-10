import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage.po";
import { LoginPage } from "../Pages/LoginPage.po";
import { AccountCreatedPage } from "../Pages/AccountCreatedPage.po";
import { LogoutPage } from "../Pages/LogoutPage.po";
import userData from "../tests/test-data/userData.json";

test("Login User With Valid Credentials", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const logout = new LogoutPage(page);

  await home.navigate();
  await home.verifyHomeVisible();
  await home.clickSignupLogin();

  await login.LogintoYourAccoutVisible();
  await login.ValidCredentials(userData.email, userData.password);

  await AccountCreatedPage.verifyLoggedIn;

  await logout.ClickonLogout();
  await login.LogintoYourAccoutVisible();
});
