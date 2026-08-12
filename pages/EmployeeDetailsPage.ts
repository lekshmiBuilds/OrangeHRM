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

        // Save button in Job section
        this.saveButton = page.getByRole('button', { name: 'Save' }).first();

        // Success toast
        this.successToast = page.locator('.oxd-toast');
    }

    async clickJobTab(): Promise<void> {
        await this.jobTab.click();
    }

    async selectJobTitle(jobTitle: string): Promise<void> {

        await this.jobTitleDropdown.click();

        await this.page.getByRole('option', { name: jobTitle }).click();

    }

    async selectEmploymentStatus(status: string): Promise<void> {

        await this.employmentStatusDropdown.click();

        await this.page.getByRole('option', { name: status }).click();

    }

    async clickSave(): Promise<void> {

        await this.saveButton.click();

    }

    async verifyJobUpdated(): Promise<void> {

        await expect(this.successToast).toContainText('Successfully Updated');

    }

    async updateJobDetails(
        jobTitle: string,
        employmentStatus: string
    ): Promise<void> {

        await this.clickJobTab();

        await this.selectJobTitle(jobTitle);

        await this.selectEmploymentStatus(employmentStatus);

        await this.clickSave();

        await this.verifyJobUpdated();

    }
}