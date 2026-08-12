import {Page, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage
{
    constructor(page: Page)
    {
        super(page);
    }

    async verifyDashboardLoaded() 
    {
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        }
    }

