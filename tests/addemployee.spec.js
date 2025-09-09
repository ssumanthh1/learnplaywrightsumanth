import { test, expect } from '@playwright/test';
import data from "../testdata/orangeHRM.json"
test('verify add employee', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(data.username)
    await page.locator("input[name='password']").fill(data.password)
    await page.locator("button.oxd-button.oxd-button--medium").click()
    await expect (page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//a[@class='oxd-main-menu-item']//span)[2]").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    await page.locator("//a[normalize-space(text())='Add Employee']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
    await page.locator("(//input[contains(@class,'oxd-input oxd-input--active')])[2]").fill(data.firstname)
    await page.locator("input[name='middleName']").fill(data.middlename)
    await page.locator("input[name='lastName']").fill(data.lastname)
    await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill("4398")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//a[normalize-space(text())='Employee List']")).toBeVisible()
})