import { test, expect } from '@playwright/test';
var credentials={
    username :"Admin",
    password :"admin123"
}
const employees={
    emp1:{
        firstname:"sumanth",
        lastname:"p n"
    },
    emp2:{
        firstname:"lokesh",
        lastname:"m"
    },
    emp3:{
        firstname:"anji",
        lastname:"t"
    }
}
for(let emp in employees){

test(`verify add employe- ${emp}`, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill(credentials.username)
    await page.getByPlaceholder("Password").fill(credentials.password)
    await page.locator("//button[@type='submit']").click()
    await page.getByText("PIM").click()
    await page.getByText("Add Employee").click()
    await page.getByPlaceholder("First Name").fill(employees[emp].firstname)
    await page.getByPlaceholder("Last Name").fill(employees[emp].lastname)
    await page.locator("//button[@type='submit']").click()
    await expect(page.getByPlaceholder("First Name")).toHaveValue(employees[emp].firstname)

})}