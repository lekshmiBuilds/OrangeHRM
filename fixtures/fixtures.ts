import { test as base, expect } from '@playwright/test';

import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';
import { AdminPage } from '../pages/AdminPage';
import { AddUserPage } from '../pages/AddUserPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { EmployeeDetailsPage } from '../pages/EmployeeDetailsPage';
import { DeleteEmployeePage } from '../pages/DeleteEmployeePage';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

type MyFixtures = {
    dashboardPage: DashboardPage;
    pimPage: PIMPage;
    adminPage: AdminPage;
    addUserPage: AddUserPage;
    addEmployeePage: AddEmployeePage;
    employeeDetailsPage: EmployeeDetailsPage;
    deleteEmployeePage: DeleteEmployeePage;
    loginPage: LoginPage;
    logoutPage: LogoutPage;


};

export const test = base.extend<MyFixtures>({


dashboardPage: async ({ page }, use) => {

    await use(new DashboardPage(page));

},

    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },

    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },

    addUserPage: async ({ page }, use) => {
        await use(new AddUserPage(page));
    },

    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployeePage(page));
    },

    employeeDetailsPage: async ({ page }, use) => {
        await use(new EmployeeDetailsPage(page));
    },

    deleteEmployeePage: async ({ page }, use) => {
        await use(new DeleteEmployeePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    }

});

export { expect };