import { Page } from '@playwright/test';

export class OrangeHrmApiClient {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getDashboardEmployeeActionSummary() {
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