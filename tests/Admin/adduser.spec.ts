import { test } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { AdminPage } from '../../pages/AdminPage';
import { AddUserPage } from '../../pages/AddUserPage';
import userData from '../../test-data/users.json';

test('Add User', async ({ page }) => 
    {

    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);
    const addUserPage = new AddUserPage(page);
    
    // Generate a unique username
    const username = `lakshmi${Date.now().toString().slice(-6)}`;
    
    // Already authenticated using storageState
    await page.goto('/web/index.php/dashboard/index');
    
    await dashboardPage.verifyDashboardLoaded();
    await adminPage.navigateToAdmin();
    await adminPage.clickAddButton();
    await addUserPage.addUser
    (
        userData.adminUser.role,
        userData.adminUser.employeeName,
        userData.adminUser.status,
        username,
        userData.adminUser.password
    );
    await adminPage.searchUser(username);
    await adminPage.verifyUserExists(username);
    await adminPage.selectUser(username);
    await adminPage.deleteUser();
    await adminPage.verifyUserDeleted(username);

});