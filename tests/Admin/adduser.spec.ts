import { test, expect } from '../../fixtures/fixtures';
import userData from '../../test-data/users.json';
import { RandomGenerator } from '../../utils/RandomGenerator';
import { Routes } from '../../constants/Routes';

test(' @regression Add User', async ({page, dashboardPage, adminPage, addUserPage }) => {

    // utils
    const username = RandomGenerator.generateUsername('lakshmi');

    // constant
    await page.goto(Routes.DASHBOARD);
    
    await dashboardPage.verifyDashboardLoaded();
    await adminPage.navigateToAdmin();
    await adminPage.clickAddButton();
    await addUserPage.addUser(
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