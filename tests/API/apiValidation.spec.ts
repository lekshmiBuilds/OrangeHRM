import { test, expect } from '../../fixtures/fixtures';
import { OrangeHrmApiClient } from '../../api/OrangeHrmApiClient';
import { Routes } from '../../constants/Routes';

test('@regression Validate dashboard employee action summary API', async ({ page, dashboardPage }) => {

    await page.goto(Routes.DASHBOARD);
    await dashboardPage.verifyDashboardLoaded();

    const orangeHrmApiClient = new OrangeHrmApiClient(page);
    const response = await orangeHrmApiClient.getDashboardEmployeeActionSummary();

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.data).toBeDefined();
    expect(Array.isArray(response.body.data)).toBeTruthy();
    expect(response.body.data.length).toBeGreaterThan(0);

});