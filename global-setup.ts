import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {

    console.log('========== GLOBAL SETUP STARTED ==========');

    const browser = await chromium.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL('**/dashboard/index');

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

    console.log('Storage state saved successfully.');

    await browser.close();

    console.log('========== GLOBAL SETUP FINISHED ==========');
}

export default globalSetup;