import { test, expect } from '@playwright/test';

test('login with autofill method', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const value1=(await page.locator("//p[text()='Username : Admin']").textContent()).substring(11)
    const value2=await page.locator("//p[contains(.,'admin123')]").textContent().substring(11)
    // console.log(value1)
    // console.log(value1.substring(11))
    // console.log(value2.substring(11))
    
    await page.locator("input[name='username']").fill(value1)
    await page.locator("input[name='password']").fill(value2)
    await page.keyboard.press('Enter')
    await expect(page.locator("//h6[text()='Dashboard']")).toHaveText('Dashboard')

    


})