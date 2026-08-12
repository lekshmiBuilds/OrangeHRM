# OrangeHRM Automation Framework using Playwright

## 📌 Project Overview

This project is an end-to-end UI and API automation framework built using **Playwright** with **TypeScript**, following the **Page Object Model (POM)** design pattern.

The framework automates key OrangeHRM workflows such as user authentication, employee management, user management, logout, and API validation while following clean coding practices, reusable components, and modular architecture.

The framework uses **Global Setup** together with **Playwright Storage State** to authenticate once before the test execution and reuse the authenticated session across all applicable tests.

---

# 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner

---

# 📂 Project Structure

```
OrangeHRM
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── AdminPage.ts
│   ├── AddUserPage.ts
│   ├── PIMPage.ts
│   ├── AddEmployeePage.ts
│   ├── EmployeeDetailsPage.ts
│   ├── DeleteEmployeePage.ts
│   └── LogoutPage.ts
│
├── tests
│   ├── Authentication
│   │     ├── loginpage.spec.ts
│   │     └── logout.spec.ts
│   │
│   ├── Admin
│   │     └── adduser.spec.ts
│   │
│   ├── Employee E2E
│   │     └── addeditdeleteEmployee.spec.ts
│   │
│   └── API
│         └── apiValidation.spec.ts
│
├── test-data
│   ├── login.json
│   ├── users.json
│   ├── employee.json
│   └── profile.jpg
│
├── playwright
│   └── .auth
│        └── user.json
│
├── playwright-report
├── test-results
│
├── global-setup.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

# 🏗 Framework Design

This framework follows the **Page Object Model (POM)** design pattern.

- Each page is implemented as an individual Page Object class.
- Every page contains only the locators and methods related to that page.
- A reusable **BasePage** provides common functionality shared across multiple pages.
- Test data is externalized using JSON files.
- Authentication is handled centrally using **Global Setup** and **Storage State**, reducing test execution time.

This structure improves:

- Code Reusability
- Maintainability
- Scalability
- Readability

---

# 🔐 Authentication

The framework uses **Global Setup** together with **Playwright Storage State**.

Before the test suite starts:

1. `global-setup.ts` launches the browser.
2. Logs into OrangeHRM.
3. Stores the authenticated session inside:

```
playwright/.auth/user.json
```

All subsequent UI tests reuse this authentication state, avoiding repeated login and improving execution speed.

---

# ✅ Automated Test Scenarios

## Authentication

- Login with valid credentials
- Verify successful login
- Logout
- Verify successful logout

---

## Admin Module

- Navigate to Admin
- Add User
- Search User
- Delete User
- Verify User Deletion

---

## Employee Module (PIM)

- Navigate to PIM
- Add Employee
- Upload Profile Picture
- Verify Employee Creation
- Edit Employee Details
- Delete Employee
- Verify Employee Deletion

---

## API Validation

- Validate Dashboard API
- Execute authenticated API request
- Validate HTTP Status Code
- Validate API Response

---

# 📄 Test Data

Test data is maintained separately under the **test-data** folder.

```
login.json
users.json
employee.json
profile.jpg
```

Benefits:

- No hardcoded values
- Easy maintenance
- Reusable test data
- Better scalability

---

# 📊 Reporting

The framework generates:

- HTML Report
- Screenshots on Failure
- Video Recording on Failure
- Trace Files on Failure

View the HTML report using:

```bash
npx playwright show-report
```

---

# ▶️ Installation

Clone the repository

```bash
git clone https://github.com/lekshmiBuilds/OrangeHRM.git
```

Navigate to the project

```bash
cd OrangeHRM
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Execute Tests

## Execute All Tests

```bash
npx playwright test
```

---

## Execute Login Test

```bash
npx playwright test tests/Authentication/loginpage.spec.ts
```

---

## Execute Logout Test

```bash
npx playwright test tests/Authentication/logout.spec.ts
```

---

## Execute Admin Test

```bash
npx playwright test tests/Admin/adduser.spec.ts
```

---

## Execute Employee E2E Test

```bash
npx playwright test "tests/Employee E2E/addeditdeleteEmployee.spec.ts"
```

---

## Execute API Validation Test

```bash
npx playwright test tests/API/apiValidation.spec.ts
```

---

# 📈 View HTML Report

```bash
npx playwright show-report
```

---

# ⭐ Features Implemented

- Playwright with TypeScript
- Page Object Model (POM)
- Base Page
- Global Setup
- Storage State Authentication
- External JSON Test Data
- Dynamic Employee ID Generation
- UI Automation
- API Validation
- HTML Reporting
- Screenshot Capture
- Video Recording
- Trace Collection
- Modular Project Structure
- Reusable Methods

---

# 📦 Dependencies

Major dependencies used:

- @playwright/test
- typescript
- ts-node
- @types/node

Install all dependencies using:

```bash
npm install
```

---

# 🔮 Future Enhancements

- Cross-browser execution (Firefox, WebKit)
- Parallel execution optimization
- CI/CD integration using GitHub Actions or Azure DevOps
- Allure Reporting
- Data-driven execution using CSV or Excel
- Environment-specific configuration (.env)

---

# 👩‍💻 Author

**Lekshmi Mahadevan**

Automation QA Engineer

**Skills**

- Playwright
- TypeScript
- UI Automation
- API Testing
- End-to-End Automation
- Page Object Model (POM)
- Test Automation Framework Development