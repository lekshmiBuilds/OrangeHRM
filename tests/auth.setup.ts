import { test as setup, expect } from '@playwright/test';

setup('Authenticate', async ({ page }) => 
    
    {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/);
    await page.context().storageState({path: 'playwright/.auth/user.json'  });

});