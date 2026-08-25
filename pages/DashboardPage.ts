import {Page, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { Routes } from '../constants/Routes';

export class DashboardPage extends BasePage
{
    constructor(page: Page)
    {
        super(page);
    }

    async verifyDashboardLoaded() 
    {
        await expect(this.page).toHaveURL(new RegExp(`${Routes.DASHBOARD}$`));
        }
    }

