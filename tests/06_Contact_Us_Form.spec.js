import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage.po";
import { ContactUsPage } from "../Pages/ContactUsPage.po";
test("Contact Us form", async ({ page }) => {
  const home = new HomePage(page);
  const contactus = new ContactUsPage(page);

  await home.navigate();
  await home.homeImage;

  await contactus.clickinOnContactUs();
  await contactus.VerifyGetInTouchVisible();
  await contactus.filContactform();
  await contactus.FileUpload();
  await contactus.submitBtnform();
  await contactus.verifySuccessMessage();
  await contactus.navigateHome();
});
