import {expect} from '@playwright/test';

export class HomePage
{
    constructor(page)
    {
        this.page = page;
        this.menu = "//img[@alt='menu']";
        //this.logoutoption = "//button[@class='nav-menu-item']";
        this.manageoption = ".nav-menu-item-manage";
        this.logoutoption = "text = Sign out";
        
    }
    
    async verifyManageOption()
    {
        await expect(this.page.locator(this.manageoption)).toBeVisible();
    }
    async logoutFromApplication()
    {
        await this.page.click(this.menu);
        await this.page.click(this.logoutoption);
    }
}