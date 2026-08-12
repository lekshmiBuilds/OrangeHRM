import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {

        super(page);
        this.usernameInput = this.page.locator('input[name="username"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async navigateToLoginPage(): Promise<void> 
    {
        await this.navigate
        (
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );
    }

    async login(username: string, password: string): Promise<void> 
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}