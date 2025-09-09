import { test, expect } from '@playwright/test';

test('verify login with valid credentials', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("//input[@data-test='username']").fill('standard_user')
    await page.locator("//input[@data-test='password']").fill('secret_sauce')
    await page.locator("//input[@value='LOGIN']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})



test('verify add to cart', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/inventory.html")
    await page.locator("(//div[@class='inventory_item_price']/following-sibling::button)[1]").click()
    await page.locator("//div[@id='shopping_cart_container']/a[1]").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/cart.html")
}) 

test('verify order a product', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("(//input[@class='form_input'])[1]").fill('standard_user')
    await page.locator("(//input[@class='form_input'])[2]").fill('secret_sauce')
    await page.locator("//input[@type='submit']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
    await page.locator("(//div[@class='pricebar']//button)[1]").click()
    await page.locator("//div[@id='shopping_cart_container']/a[1]").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/cart.html")
    await page.locator("//a[normalize-space(text())='CHECKOUT']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-one.html")
    await page.locator("(//span[normalize-space(text())='1']/following::input)[1]").fill('vijji')
    await page.locator("(//span[normalize-space(text())='1']/following::input)[2]").fill('mc')
    await page.locator("(//span[normalize-space(text())='1']/following::input)[3]").fill('515345')
    await page.locator("//input[@value='CONTINUE']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-two.html")
    await page.locator("//a[normalize-space(text())='FINISH']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-complete.html")
}) 
