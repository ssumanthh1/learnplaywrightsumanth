import { test, expect } from '@playwright/test';

test('verify login with valid credentials', async ({ page }) => {
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})


test('verify login with valid username and invalid password credentials', async ({ page }) => {
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin12')
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("//div[@role='alert']")

})