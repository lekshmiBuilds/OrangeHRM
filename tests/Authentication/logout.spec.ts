import { test } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { LogoutPage } from '../../pages/LogoutPage';

test('Logout', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    const logoutPage = new LogoutPage(page);

    await page.goto('/web/index.php/dashboard/index');

    await dashboardPage.verifyDashboardLoaded();
    await logoutPage.logout();
    await logoutPage.verifyLogout();
    await logoutPage.verifySessionInvalidated();

});