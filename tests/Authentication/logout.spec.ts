import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { LogoutPage } from '../../pages/LogoutPage';

test('Login and Logout with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const logoutPage = new LogoutPage(page);

    // Login
    await loginPage.navigateToLoginPage();
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.verifyDashboardLoaded();

    // Logout
    await logoutPage.logout();
    // Verify logout
    await logoutPage.verifyLogout();
    console.log('Logout completed.');

});