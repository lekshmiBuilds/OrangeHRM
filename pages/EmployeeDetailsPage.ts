import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class EmployeeDetailsPage extends BasePage {

    private readonly jobTab: Locator;
    private readonly jobTitleDropdown: Locator;
    private readonly employmentStatusDropdown: Locator;
    private readonly saveButton: Locator;
    private readonly successToast: Locator;

    constructor(page: Page) {

        super(page);

        this.jobTab = page.getByRole('link', { name: 'Job' });

        // Job Title dropdown
        this.jobTitleDropdown = page
            .locator('label:text("Job Title")')
            .locator('../..')
            .locator('.oxd-select-text');

        // Employment Status dropdown
        this.employmentStatusDropdown = page
            .locator('label:text("Employment Status")')
            .locator('../..')
            .locator('.oxd-select-text');

        // Save button
        this.saveButton = page.getByRole('button', { name: 'Save' }).first();

        // Success toast
        this.successToast = page.locator('.oxd-toast');
    }

    async clickJobTab(): Promise<void> {

        await this.jobTab.click();

    }

    async selectJobTitle(): Promise<void> {

        await this.jobTitleDropdown.click();

        const options = this.page.locator('.oxd-select-dropdown > *');

        const count = await options.count();

        if (count <= 1) {
            throw new Error('No Job Title options found.');
        }

        const selectedJobTitle = await options.nth(1).textContent();

        console.log('Selected Job Title:', selectedJobTitle);

        await options.nth(1).click();

    }

    async selectEmploymentStatus(): Promise<void> {

        await this.employmentStatusDropdown.click();

        const options = this.page.locator('.oxd-select-dropdown > *');

        const count = await options.count();

        if (count <= 1) {
            throw new Error('No Employment Status options found.');
        }

        const selectedStatus = await options.nth(1).textContent();

        console.log('Selected Employment Status:', selectedStatus);

        await options.nth(1).click();

    }

    async clickSave(): Promise<void> {

        await this.saveButton.click();

    }

    async verifyJobUpdated(): Promise<void> {

        await expect(this.successToast).toContainText('Successfully Updated');

    }

    async updateJobDetails(): Promise<void> {

        await this.clickJobTab();

        await this.selectJobTitle();

        await this.selectEmploymentStatus();

        await this.clickSave();

        await this.verifyJobUpdated();

    }

}