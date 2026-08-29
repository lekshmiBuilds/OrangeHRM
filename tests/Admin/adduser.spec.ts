import { test } from '../../fixtures/fixtures';
import userData from '../../test-data/users.json';
import employeeData from '../../test-data/employee.json';
import { RandomGenerator } from '../../utils/RandomGenerator';
import { Routes } from '../../constants/Routes';

test('@regression Add User', async ({
    page,
    dashboardPage,
    pimPage,
    addEmployeePage,
    adminPage,
    addUserPage
}) => {

    const employee = RandomGenerator.generateEmployee();
    const employeeId =RandomGenerator.generateEmployeeId();
    const username =RandomGenerator.generateUsername('lakshmi');

    await page.goto(Routes.DASHBOARD);
    await dashboardPage.verifyDashboardLoaded();
    await pimPage.navigateToPIM();
    await pimPage.clickAddEmployee();
    await addEmployeePage.addEmployee(
    employee.firstName,
    '',
    employee.lastName,
    employeeId,
    employeeData.employee.profilePicture
);
    await adminPage.navigateToAdmin();
    await adminPage.clickAddButton();
    await addUserPage.addUser(
        userData.adminUser.role,
        employee.fullName,
        userData.adminUser.status,
        username,
        userData.adminUser.password
    );
    await adminPage.searchUser(username);
    await adminPage.verifyUserExists(username);

});