import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LogoutPage extends BasePage {

    private readonly userDropdown: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page) 
    {

        super(page);

        this.userDropdown = page.locator('.oxd-userdropdown-name');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout() 
    {

        await this.userDropdown.click();
        await this.logoutButton.click();

    }

    async verifyLogout() 
    {

        await expect(this.page).toHaveURL(/auth\/login/);

    }

    async verifySessionInvalidated() {

        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
        );

        await expect(this.page).toHaveURL(/auth\/login/);

    }

}