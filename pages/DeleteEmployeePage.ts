import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DeleteEmployeePage extends BasePage {

    private readonly employeeListTab: Locator;
    private readonly employeeNameInput: Locator;
    private readonly searchButton: Locator;
    private readonly employeeCheckbox: Locator;
    private readonly deleteButton: Locator;
    private readonly confirmDeleteButton: Locator;
    private readonly successToast: Locator;

    constructor(page: Page) 
    {

        super(page);
        this.employeeListTab = page.getByRole('link', { name: 'Employee List' });
        // Employee Name search box
        this.employeeNameInput = page.locator('input').nth(1);
        this.searchButton = page.getByRole('button', { name: 'Search' });
        // First employee checkbox
        this.employeeCheckbox = page.locator('.oxd-checkbox-input').first();
        this.deleteButton = page.locator('button').filter({has: page.locator('.bi-trash')}).first();
        this.confirmDeleteButton = page.getByRole('button', {name: 'Yes, Delete'});
        this.successToast = page.locator('.oxd-toast');

    }

    async navigateToEmployeeList(): Promise<void> 
    {
        await this.employeeListTab.click();
    }

    async searchEmployee(employeeName: string): Promise<void> {

        await this.employeeNameInput.fill(employeeName);

        await this.searchButton.click();

    }

    async selectEmployee(): Promise<void> {

        await this.employeeCheckbox.click();

    }

    async clickDelete(): Promise<void> {

        await this.deleteButton.click();

    }

    async confirmDelete(): Promise<void> {

        await this.confirmDeleteButton.click();

    }

    async verifyEmployeeDeleted(): Promise<void> {

        await expect(this.successToast).toContainText('Successfully Deleted');

    }

    async deleteEmployee(employeeName: string): Promise<void> {

        await this.navigateToEmployeeList();

        await this.searchEmployee(employeeName);

        await this.selectEmployee();

        await this.clickDelete();

        await this.confirmDelete();

        await this.verifyEmployeeDeleted();

    }

}