import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LogoutPage extends BasePage {

    private readonly userDropdown: Locator;
    private readonly logoutMenu: Locator;

    constructor(page: Page) {
        super(page);

        this.userDropdown = page.locator('.oxd-userdropdown-name');
        this.logoutMenu = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout(): Promise<void> {

        await this.userDropdown.click();

        await this.logoutMenu.click();

    }

    async verifyLogout(): Promise<void> {

        await expect(this.page).toHaveURL(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

    }

}