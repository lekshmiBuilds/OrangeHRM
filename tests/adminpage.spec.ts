import { test, expect } from '../fixtures/fixtures';

test('Admin - Verify Navigation to Add User page', async ({page, dashboardPage,adminPage, addUserPage }) => {

    // Already authenticated using globalSetup + storageState
    await page.goto('/web/index.php/dashboard/index');

    // Verify Dashboard
    await dashboardPage.verifyDashboardLoaded();

    // Navigate to Admin module
    await adminPage.navigateToAdmin();

    // Click Add button
    await adminPage.clickAddButton();

    // Verify Add User page
    await addUserPage.verifyAddUserPage();

});