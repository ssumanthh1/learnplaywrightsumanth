import { test, expect } from '@playwright/test';
import data from"../testdata/orangeHRM.json"

test('verify login with valid credentials', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill(data.username)
    await page.locator("input[name='password']").fill(data.password)
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})