import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPage extends BasePage {

    private readonly adminMenu: Locator;
    private readonly addButton: Locator;
    private readonly searchUsernameInput: Locator;
    private readonly searchButton: Locator;
    private readonly resultTable: Locator;
    private readonly deleteButton: Locator;
    private readonly confirmDeleteButton: Locator;
    private readonly successToast: Locator;
    private readonly resultRows: Locator;
    constructor(page: Page) 
    
    {

        super(page);
        this.adminMenu = page.locator('span.oxd-main-menu-item--name').filter({ hasText: 'Admin' });
        this.addButton = page.locator('button').filter({ hasText: 'Add' }).first();
        this.searchUsernameInput = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: 'Username' }) }).locator('input').first();
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resultTable = page.locator('.oxd-table-body');
        this.deleteButton = page.locator('button').filter({ has: page.locator('.bi-trash') }).first();
        this.confirmDeleteButton = page.getByRole('button', {name: 'Yes, Delete'});
        this.successToast = page.locator('.oxd-toast');
        this.resultRows = page.locator('.oxd-table-card');
    }

    async navigateToAdmin(): Promise<void> 
    {
        await this.adminMenu.click();
        await expect(this.page).toHaveURL(/admin/);
        await this.page.pause();
    }

    async clickAddButton(): Promise<void> 
    {
        await expect(this.page).toHaveURL(/admin/);
        await this.addButton.waitFor({ state: 'visible' });
        await this.addButton.click();
    }

    async searchUser(username: string): Promise<void> 
    {
        await this.searchUsernameInput.fill(username);
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
        const rows = this.page.locator('.oxd-table-row');
        console.log('Rows found:', await rows.count());
    }

    async verifyUserExists(username: string): Promise<void> 
    {
    await expect(this.resultTable.getByText(username, { exact: true })).toBeVisible();
    }

    async selectUser(username: string): Promise<void> 
    {
        const row = this.page.locator('.oxd-table-row').filter({ hasText: username });
        await expect(row).toBeVisible();
        await row.highlight();
        await row.locator('.oxd-checkbox-input').click();
    }

    async deleteUser(): Promise<void> 
    {
        await this.deleteButton.waitFor({ state: 'visible' });
        await this.deleteButton.click();
        await this.confirmDeleteButton.waitFor({ state: 'visible' });
        await this.confirmDeleteButton.click();
        await expect(this.successToast).toBeVisible();
    }

async verifyUserDeleted(username: string): Promise<void> 
{
    await this.searchUser(username);

    await expect(this.resultRows).toHaveCount(0, { timeout: 10000 });
}   

}