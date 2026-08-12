import { Locator, expect,Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddUserPage extends BasePage 
{

    private readonly userRoleDropdown: Locator;
    private readonly employeeNameInput: Locator;
    private readonly statusDropdown: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    private readonly saveButton: Locator;


    constructor(page: Page) {
        super(page);
        this.userRoleDropdown =  page.locator('.oxd-input-group').filter({ hasText: /^User Role/i }).locator('.oxd-select-text');
        this.employeeNameInput = page.getByPlaceholder('Type for hints...');
        this.statusDropdown = page.locator('.oxd-input-group').filter({ hasText: /^Status/i }).locator('.oxd-select-text');        
        this.usernameInput = page.locator('.oxd-input-group').filter({ hasText: /^Username/i }).locator('input');
        this.passwordInput = page.locator('input[type="password"]').first();
        this.confirmPasswordInput = page.locator('input[type="password"]').nth(1);
        this.saveButton = page.getByRole('button', { name: 'Save' });;
    }

        private async selectDropdownOption(dropdown: Locator, optionText: string): Promise<void> 
    {
        await dropdown.waitFor({ state: 'visible', timeout: 10000 });
        await dropdown.click();
        const option = this.page.locator('.oxd-select-option').filter({ hasText: new RegExp(optionText, 'i') }).first();
        await option.waitFor({ state: 'visible', timeout: 10000 });
        await option.click();
    }
    async selectUserRole(role: string): Promise<void> 
    {
        await this.userRoleDropdown.waitFor({ state: 'visible' });
        await this.userRoleDropdown.click();
        const option = this.page.locator('.oxd-select-option').filter({ hasText: new RegExp(role, 'i') }).first();
        await option.waitFor({ state: 'visible' });
        await option.click();
    }

    async enterEmployeeName(employeeName: string): Promise<void> 
    {
        for (const ch of employeeName) 
            {
            await this.employeeNameInput.pressSequentially(ch, { delay: 100});
        }
        const employeeOption = this.page.locator('.oxd-autocomplete-option').filter({ hasText: employeeName }).first();
        await employeeOption.click();
    }

    async selectStatus(status: string): Promise<void> 
        {
            await this.selectDropdownOption(this.statusDropdown, status);
        }

    async enterUsername(username: string): Promise<void> 
    {
        await this.usernameInput.fill(username);    
    }

    async enterPassword(password: string): Promise<void> 
    {
        await this.passwordInput.fill(password);    
    }

    async enterConfirmPassword(password: string): Promise<void> 
    {
        await this.confirmPasswordInput.fill(password);
    }

    async saveUser(): Promise<void> 
    {
    await this.saveButton.click();    
    const successToast = this.page.locator('.oxd-toast') .filter({ hasText: /Successfully Saved/i });
    await successToast.waitFor({state: 'visible',timeout: 10000});
    }

    async verifyAddUserPage(): Promise<void> 
    {

    await expect(this.page.getByRole('heading', { name: 'Add User' }) ).toBeVisible();
     }
    async addUser
    (
        role: string,
        employeeName: string,
        status: string,
        username: string,
        password: string
    ): Promise<void> 
    {
        await this.selectUserRole(role);
        await this.enterEmployeeName(employeeName);
        await this.selectStatus(status);
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
        await this.saveUser();
    }



}