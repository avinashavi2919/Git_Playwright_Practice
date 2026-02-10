import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage.po";
import { testcasePage } from "../Pages/TestCasesPage.po";

test("Verify Test cases", async ({ page }) => {
  const home = new HomePage(page);
  const testcase = new testcasePage(page);

  await home.navigate();
  await home.verifyHomeVisible;
  await testcase.testcaseBtnClick();
  await testcase.verifytestcasesVisiblie();
});
