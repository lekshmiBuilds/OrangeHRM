import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: 1,
  reporter: 'html',

  globalSetup: './global-setup.ts',

  use: {

    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,
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