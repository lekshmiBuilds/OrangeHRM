import { test, expect } from '@playwright/test';

test('Validate Dashboard API from browser session', async ({ page }) => {

    // User is already authenticated via globalSetup + storageState
    await page.goto('/web/index.php/dashboard/index');

    const response = await page.evaluate(async () =>   
    {

        const res = await fetch('/web/index.php/api/v2/dashboard/employees/action-summary' );
        return {
            status: res.status,
            body: await res.json()
        };
    });

    console.log('Status:', response.status);
    console.log('Response:', response.body);

    // Validate status code
    expect(response.status).toBe(200);

    // Validate at least one dashboard widget is returned
    expect(response.body.data.length).toBeGreaterThan(0);

});