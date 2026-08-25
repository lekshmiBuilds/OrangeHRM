import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

async function globalSetup(config: FullConfig) 

{
    console.log('========== GLOBAL SETUP STARTED ==========');
    const browser = await chromium.launch({headless: process.env.CI ? true : false});
    const page = await browser.newPage();
    console.log('ORANGEHRM_BASE_URL:', process.env.ORANGEHRM_BASE_URL);
    console.log('ORANGEHRM_USERNAME:', process.env.ORANGEHRM_USERNAME);
    console.log('ORANGEHRM_PASSWORD:', process.env.ORANGEHRM_PASSWORD);

    await page.goto(process.env.ORANGEHRM_BASE_URL!);
    await page.getByPlaceholder('Username').fill(process.env.ORANGEHRM_USERNAME!);
    await page.getByPlaceholder('Password').fill(process.env.ORANGEHRM_PASSWORD!);
    
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/dashboard/index');
    await page.context().storageState({path: 'playwright/.auth/user.json'});
    console.log('Storage state saved successfully.');
    await browser.close();
    console.log('========== GLOBAL SETUP FINISHED ==========');
}

export default globalSetup;