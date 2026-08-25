import { test } from '../../fixtures/fixtures';
import employeeData from '../../test-data/employee.json';
import { RandomGenerator } from '../../utils/RandomGenerator';
import { Routes } from '../../constants/Routes';

test(' @regression Add Employee, Edit Employee, Delete Employee', async ({
    page,
    dashboardPage,
    pimPage,
    addEmployeePage,
    employeeDetailsPage,
    deleteEmployeePage
}) => {

    //utils
    const employeeId = RandomGenerator.generateEmployeeId();
    
    await page.goto(Routes.DASHBOARD);

    await dashboardPage.verifyDashboardLoaded();
    
    
    await pimPage.navigateToPIM();
    await pimPage.clickAddEmployee();
    await addEmployeePage.addEmployee(
        employeeData.employee.firstName,
        employeeData.employee.middleName,
        employeeData.employee.lastName,
        employeeId,
        employeeData.employee.profilePicture
    );

    await employeeDetailsPage.updateJobDetails();
    await deleteEmployeePage.deleteEmployee(
        `${employeeData.employee.firstName} ${employeeData.employee.lastName}`
    );

});