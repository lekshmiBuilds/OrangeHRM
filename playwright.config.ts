import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: 1,
  reporter: 'html',

  globalSetup: './global-setup.ts',

  use: {

    baseURL: process.env.ORANGEHRM_BASE_URL,
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'

  },

projects: [

{
    name: 'chromium',

    use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json'
    }
}

]

});