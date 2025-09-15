import { test, expect } from '@playwright/test';
import data from"../../testdata/orangeHRM.json"

test('verify dropdown', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
  await page.locator("//input[@placeholder='Username']").fill(data.username)
  await page.locator("//input[@placeholder='Password']").fill(data.password)
  await page.locator("//button[@type='submit']").click()
  await page.locator("//span[text()='Claim']").click()
  await page.locator("(//input[@placeholder='Type for hints...'])[1]").fill('suman')
  await page.locator("(//div[@class='oxd-select-text oxd-select-text--active']//div)[1]").selectText('freelancer')

})