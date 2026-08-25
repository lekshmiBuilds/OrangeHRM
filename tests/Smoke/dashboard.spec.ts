import { test } from '../../fixtures/fixtures';
import { Routes } from '../../constants/Routes';

test('@smoke Verify Dashboard Loads', async ({ page, dashboardPage }) => 
    
    {

    await page.goto(Routes.DASHBOARD);

    await dashboardPage.verifyDashboardLoaded();

});