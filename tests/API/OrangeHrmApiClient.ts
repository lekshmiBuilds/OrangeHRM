import { Page } from '@playwright/test';
import { ApiEndpoints } from './ApiEndpoints';

type DashboardEmployeeActionSummaryResponse = {
    status: number;
    body: {
        data: unknown[];
    };
};

export class OrangeHrmApiClient {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getDashboardEmployeeActionSummary(): Promise<DashboardEmployeeActionSummaryResponse> {
        const response = await this.page.evaluate(async (endpoint) => {
            const res = await fetch(endpoint);

            return {
                status: res.status,
                body: await res.json()
            };
        }, ApiEndpoints.DASHBOARD_EMPLOYEE_ACTION_SUMMARY);

        return response;
    }
}