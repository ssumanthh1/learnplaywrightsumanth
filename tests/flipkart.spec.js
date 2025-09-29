import { test, expect } from '@playwright/test';

test('verify login with valid credentials', async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator("//img[@alt='Mobiles & Tablets']").click()
    await page.locator("//input[@placeholder='Search for products, brands and more']").fill("mi mobils")
    
})