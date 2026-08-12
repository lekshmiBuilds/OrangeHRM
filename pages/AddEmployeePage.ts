import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddEmployeePage extends BasePage {

    private readonly firstNameInput: Locator;
    private readonly middleNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly employeeIdInput: Locator;
    private readonly profilePictureInput: Locator;
    private readonly saveButton: Locator;

    constructor(page: Page) 
    {

        super(page);
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.middleNameInput = page.locator('input[name="middleName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.employeeIdInput = page.locator('.oxd-input-group').filter({ hasText: /^Employee Id/i }).locator('input');
        this.profilePictureInput = page.locator('input[type="file"]');
        this.saveButton = page.getByRole('button', { name: 'Save' });

    }

    async enterFirstName(firstName: string): Promise<void> 
    {
        await this.firstNameInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.firstNameInput.fill(firstName);
    }   

    async enterMiddleName(middleName: string): Promise<void> 
    {
        await this.middleNameInput.fill(middleName);
    }

    async enterLastName(lastName: string): Promise<void> 
    {
        await this.lastNameInput.fill(lastName);
    }

    async enterEmployeeId(employeeId: string): Promise<void> 
    {
        await this.employeeIdInput.clear();
        await this.employeeIdInput.fill(employeeId);
    }

    async uploadProfilePicture(filePath: string): Promise<void> 
    {
        await this.profilePictureInput.setInputFiles(filePath);
    }

    async clickSave(): Promise<void> 
    {

        await this.saveButton.waitFor({ state: 'visible' });
        await this.saveButton.click();
        // Wait briefly for navigation if it happens
        await this.page.waitForTimeout(2000);
        console.log('Current URL:', this.page.url());
    }

    async verifyEmployeeCreated(): Promise<void> 
    {

        console.log('Verifying URL:', this.page.url());
        await expect(this.page).toHaveURL(/viewPersonalDetails/, { timeout: 10000  });
        await expect(this.page.locator('h6').filter({ hasText: 'Personal Details' })).toBeVisible();

    }

    async addEmployee(
        firstName: string,
        middleName: string,
        lastName: string,
        employeeId: string,
        profilePicture: string
    ): Promise<void> 
    
    {

        await this.enterFirstName(firstName);
        await this.enterMiddleName(middleName);
        await this.enterLastName(lastName);
        await this.enterEmployeeId(employeeId);
        await this.uploadProfilePicture(profilePicture);
        await this.clickSave();
        await this.verifyEmployeeCreated();

    }
}