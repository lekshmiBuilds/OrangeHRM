import { test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';
import { AddUserPage } from '../pages/AddUserPage';

test('Admin - Verify Navigation to Add User page', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);
    const addUserPage = new AddUserPage(page);

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