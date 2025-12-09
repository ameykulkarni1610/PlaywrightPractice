import { test, expect } from '@playwright/test';
import testData from '../testdata.json';
import users from '../datadriventest.json';
import {LoginPage} from '../pages/loginpage';
import {HomePage} from '../pages/homepage';


test('Login to Application Using POM',async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    
    const login = new LoginPage(page);
    
    await login.loginToApplication();
    
    //await expect(page.getByText("Manage")).toBeVisible();
    //await expect(page.getByRole('button' , {name:'Cart'})).toBeVisible();
    //await expect(page.locator('.nav-menu-item-manage')).toBeVisible();
    const homePage = new HomePage(page);
    
    await homePage.verifyManageOption();
    
    await homePage.logoutFromApplication();
    
    //await expect(page.locator('.header')).toBeVisible();
    await login.verifySignedOut();
});