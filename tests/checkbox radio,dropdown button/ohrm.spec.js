import { test, expect } from '@playwright/test';
import data from"../../testdata/orangeHRM.json"

test('verify check box', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill(data.username)
    await page.locator("//input[@placeholder='Password']").fill(data.password)
    await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='PIM']").click()
    await page.locator("(//input[@type='checkbox'])[1]").check({force:true})
    await expect(page.locator("//button[contains(.,'Delete Selected')]")).toBeVisible()
})

test('verify pic toggle radio button', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill(data.username)
    await page.locator("//input[@placeholder='Password']").fill(data.password)
    await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='PIM']").click()
    await page.locator("//a[normalize-space(text())='Add Employee']").click()
    await page.locator("//input[@placeholder='First Name']").fill(data.firstname)
    await page.locator("//input[@placeholder='Last Name']").fill(data.lastname)
    await page.locator('//input[@type="file"]').setInputFiles('testdata/picture/download (1).jpg')
    await page.locator("//input[@type='checkbox']/following-sibling::span[1]").check()
    await page.locator("(//div[@class='oxd-radio-wrapper']//label)[2]").check()
    await page.locator("(//label[normalize-space(text())='Username']/following::input)[1]").fill("abcdipdfgh")
    await page.locator("(//label[normalize-space(text())='Password']/following::input)[1]").fill("123asdfg")
    await page.locator("//label[normalize-space(text())='Confirm Password']/following::input").fill("123asdfg")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//a[normalize-space(text())='Employee List']")).toBeVisible()
    await page.locator('(//div[text()="-- Select --"]) [2]').selectText('Single')
    await expect(page.locator("//a[normalize-space(text())='Employee List']")).toBeVisible()
    
    
    
    

})

