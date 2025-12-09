import {expect} from '@playwright/test';

export class LoginPage
{
    constructor(page)
    {
        //Initialising browser instance
        this.page = page;
        //Initialising locators
        this.username = "#email1";
        this.password = "#password1";
        this.loginButton = "//button[text()='Sign in']";
        this.header = ".header";
    }
    
    //method to verify sign in page after signed outer
    async verifySignedOut()
    {
        await expect(this.page.locator(this.header)).toBeVisible();
    }
    //method to use locators
    async loginToApplication()
    {
       await this.page.fill(this.username,"admin@email.com");
       await this.page.fill(this.password,"admin@123");
       await this.page.click(this.loginButton);
    }
}

//exporting the class so that it can used by other classes
//module.exports = LoginPage;