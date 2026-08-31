import { Page } from '@playwright/test';

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
        const response = await this.page.evaluate(async () => {
            const res = await fetch('/web/index.php/api/v2/dashboard/employees/action-summary');

            return {
                status: res.status,
                body: await res.json()
            };
        });

        return response;
    }
}