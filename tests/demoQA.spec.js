import { test, expect } from '@playwright/test';
import cred from "../testdata/demoQA.json"
test('verify add employee', async ({ page }) => {
    await page.goto("https://demoqa.com/")
    await expect(page.locator("//div[@class='home-banner']//img[1]")).toBeVisible()
    await page.locator("(//div[@class='card-body']//h5)[1]").click()
    await expect(page).toHaveURL("https://demoqa.com/elements")
    await page.locator("(//li[@class='btn btn-light ']//span)[1]").click()
    await expect(page.locator("(//div[@class='col-md-9 col-sm-12']//input)[1]")).toBeVisible()
    await page.locator("(//label[normalize-space(text())='Full Name']/following::input)[1]").fill(cred.fullname)
    await page.locator("(//span[normalize-space(text())='Book Store API']/following::input)[2]").fill(cred.email)
    await page.locator("(//span[normalize-space(text())='Book Store API']/following::textarea)[1]").fill(cred.currentaddress)
    await page.locator("(//textarea[@class='form-control'])[2]").fill(cred.permenentaddress)
    await page.locator("#submit").click()
    await expect(page.locator("(//p[@class='mb-1'])[1]")).toContainText(cred.fullname)
})