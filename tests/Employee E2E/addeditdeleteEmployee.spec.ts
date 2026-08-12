import { test } from '@playwright/test';
import { DashboardPage } from '../../pages/DashboardPage';
import { PIMPage } from '../../pages/PIMPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { EmployeeDetailsPage } from '../../pages/EmployeeDetailsPage';
import { DeleteEmployeePage } from '../../pages/DeleteEmployeePage';
import employeeData from '../../test-data/employee.json';

test('Add Employee, Edit Employee, Delete Employee and Logout', async ({ page }) => 
    {

    const dashboardPage = new DashboardPage(page);
    const pimPage = new PIMPage(page);
    const addEmployeePage = new AddEmployeePage(page);
    const employeeDetailsPage = new EmployeeDetailsPage(page);
    const deleteEmployeePage = new DeleteEmployeePage(page);
    const employeeId = Date.now().toString().slice(-6);

    //Login to the application 
    await page.goto('/web/index.php/dashboard/index');
    
    await dashboardPage.verifyDashboardLoaded();
    await pimPage.navigateToPIM();
    await pimPage.clickAddEmployee();

    //Add a new employee
    await addEmployeePage.addEmployee(
        employeeData.employee.firstName,
        employeeData.employee.middleName,
        employeeData.employee.lastName,
        employeeId,
        employeeData.employee.profilePicture
    );

    //Edit the employee's job details 
    await employeeDetailsPage.updateJobDetails(
        employeeData.employee.jobTitle,
        employeeData.employee.employmentStatus
    );

    //Delete the employee after editing
    await deleteEmployeePage.deleteEmployee(
        `${employeeData.employee.firstName} ${employeeData.employee.lastName}`
    );

    page.close();

});