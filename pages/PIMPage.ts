import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PIMPage extends BasePage {

    private readonly pimMenu: Locator;
    private readonly addEmployeeButton: Locator;

    constructor(page: Page) {

        super(page);

        this.pimMenu = page.locator('span.oxd-main-menu-item--name').filter({ hasText: 'PIM' });
        this.addEmployeeButton = page.getByRole('link', { name: 'Add Employee' });
    }

    async navigateToPIM(): Promise<void> {
        await this.pimMenu.click();
    }

    async clickAddEmployee(): Promise<void> {
        await this.addEmployeeButton.click();
    }
}