[![Playwright Smoke Tests](https://github.com/lekshmiBuilds/OrangeHRM/actions/workflows/playwright-smoke.yml/badge.svg?branch=feature/orangehrm_11Aug26)](https://github.com/lekshmiBuilds/OrangeHRM/actions/workflows/playwright-smoke.yml)

# OrangeHRM Playwright Automation Framework

## 📌 Project Overview

This project is an end-to-end UI and API automation framework built using **Playwright** with **TypeScript**, following the **Page Object Model (POM)** design pattern.

The framework automates key OrangeHRM workflows such as user authentication, employee management, admin user management, logout, dashboard validation, and authenticated API validation while following clean coding practices, reusable components, and modular architecture.

The framework uses **Global Setup** together with **Playwright Storage State** to authenticate once before test execution and reuse the authenticated session across applicable tests.

It also includes **GitHub Actions CI integration** to automatically execute smoke tests on push and pull request events.

---

# 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner
- GitHub Actions
- dotenv

---

# 📂 Project Structure

```text
OrangeHRM
│
├── .github
│   └── workflows
│       └── playwright-smoke.yml
│
├── constants
│   ├── Routes.ts
│   └── Messages.ts
│
├── fixtures
│   └── fixtures.ts
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
│   │   ├── loginpage.spec.ts
│   │   └── logout.spec.ts
│   │
│   ├── Admin
│   │   └── adduser.spec.ts
│   │
│   ├── Employee E2E
│   │   └── addeditdeleteEmployee.spec.ts
│   │
│   ├── API
│   │   └── apiValidation.spec.ts
│   │
│   └── Smoke
│       └── dashboard.spec.ts
│
├── test-data
│   ├── login.json
│   ├── users.json
│   ├── employee.json
│   └── profile.jpg
│
├── utils
│   └── RandomGenerator.ts
│
├── playwright
│   └── .auth
│       └── user.json   # generated at runtime
│
├── global-setup.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

---

# 🏗 Framework Design

This framework follows the **Page Object Model (POM)** design pattern.

- Each page is implemented as an individual Page Object class.
- Every page contains only the locators and methods related to that page.
- A reusable **BasePage** provides common functionality shared across multiple pages.
- Test data is externalized using JSON files.
- Reusable constants are maintained separately for routes and UI messages.
- Utility methods are used for dynamic test data generation.
- Playwright fixtures are used for reusable page object initialization.
- Authentication is handled centrally using **Global Setup** and **Storage State**, reducing repeated login steps.

This structure improves:

- Code reusability
- Maintainability
- Scalability
- Readability
- Separation of concerns

---

# 🔐 Authentication

The framework uses **Global Setup** together with **Playwright Storage State**.

Before the test suite starts:

1. `global-setup.ts` launches the browser.
2. Logs into OrangeHRM.
3. Stores the authenticated session inside:

```text
playwright/.auth/user.json
```

All subsequent UI tests reuse this authentication state, avoiding repeated login and improving execution speed.

The authentication state file is generated at runtime and should not be committed to the repository.

---

# ⚙️ Environment Configuration

The framework supports environment-specific configuration using `.env` for local execution.

Example `.env` values:

```text
ORANGEHRM_BASE_URL=
ORANGEHRM_USERNAME=
ORANGEHRM_PASSWORD=
```

For security, the actual `.env` file is excluded from Git using `.gitignore`.

In GitHub Actions, these values are managed using GitHub repository secrets:

```text
ORANGEHRM_BASE_URL
ORANGEHRM_USERNAME
ORANGEHRM_PASSWORD
```

This keeps sensitive or environment-specific values outside the codebase.

---

# ✅ Automated Test Scenarios

## Authentication

- Login with valid credentials
- Verify successful login
- Logout
- Verify successful logout
- Validate session invalidation after logout

---

## Dashboard

- Validate dashboard page loads successfully
- Smoke test coverage for dashboard validation

---

## Admin Module

- Navigate to Admin module
- Add user
- Search user
- Delete user
- Verify user deletion

---

## Employee Module / PIM

- Navigate to PIM module
- Add employee
- Upload profile picture
- Verify employee creation
- Edit employee job details
- Delete employee
- Verify employee deletion

---

## API Validation

- Validate dashboard API
- Execute authenticated API request using browser session
- Validate HTTP status code
- Validate API response data

---

# 🧪 Test Tags

The framework supports test tagging for selective execution.

## Smoke Tests

Smoke tests validate critical application functionality.

```bash
npx playwright test --grep "@smoke"
```

## Regression Tests

Regression tests validate deeper business workflows.

```bash
npx playwright test --grep "@regression"
```

This helps separate quick CI validation from broader functional test execution.

---

# 📄 Test Data

Test data is maintained separately under the **test-data** folder.

```text
login.json
users.json
employee.json
profile.jpg
```

Benefits:

- No hardcoded test data inside specs
- Easy maintenance
- Reusable data
- Better scalability
- Cleaner test logic

---

# 🔁 GitHub Actions CI

This framework includes a GitHub Actions workflow for smoke test execution.

Workflow file:

```text
.github/workflows/playwright-smoke.yml
```

The workflow runs automatically on:

- Push
- Pull request

The CI pipeline performs the following steps:

1. Checks out the repository
2. Sets up Node.js
3. Installs project dependencies using `npm ci`
4. Installs Playwright browsers and dependencies
5. Runs Playwright smoke tests using the `@smoke` tag
6. Uploads the Playwright report as a workflow artifact when available

Smoke test command used in CI:

```bash
npx playwright test --grep "@smoke"
```

The workflow uses GitHub repository secrets for environment-specific values.

---

# 📊 Reporting

The framework generates:

- HTML report
- Screenshots on failure
- Video recording on failure
- Trace files on failure

View the HTML report using:

```bash
npx playwright show-report
```

In GitHub Actions, the Playwright report is uploaded as an artifact when available.

---

# ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/lekshmiBuilds/OrangeHRM.git
```

Navigate to the project:

```bash
cd OrangeHRM
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

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

## Execute Smoke Tests

```bash
npx playwright test --grep "@smoke"
```

---

## Execute Regression Tests

```bash
npx playwright test --grep "@regression"
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
- Page Object Model
- Base Page
- Global Setup
- Storage State Authentication
- External JSON test data
- Dynamic employee ID generation
- Dynamic username generation
- Reusable utility class
- Reusable constants for routes and UI messages
- Playwright fixtures for page object initialization
- UI automation
- API validation using authenticated browser session
- Smoke and regression test tagging
- GitHub Actions CI workflow
- Smoke test execution in CI
- Repository secrets for CI environment values
- Environment configuration using `.env`
- Headless execution support in CI
- HTML reporting
- Screenshot capture on failure
- Video recording on failure
- Trace collection on failure
- Modular project structure
- Reusable methods

---

# 📦 Dependencies

Major dependencies used:

- `@playwright/test`
- `dotenv`
- `@types/node`

Install all dependencies using:

```bash
npm install
```

---

# 🔮 Future Enhancements

- Cross-browser execution using Firefox and WebKit
- Parallel execution optimization
- Allure Reporting
- Data-driven execution using CSV or Excel
- Additional API automation scenarios
- Manual regression workflow in GitHub Actions
- Enhanced test reporting in CI
- More end-to-end business workflow coverage

---

# 📌 Project Progress

## 25 Aug 2026

Implemented the following framework enhancements:

- Added GitHub Actions CI workflow for Playwright smoke test execution
- Configured CI to run on push and pull request events
- Added repository secrets for environment-specific values
- Updated Playwright configuration to support headless execution in CI
- Added `.env` support using `dotenv` for local environment configuration
- Added reusable constants for routes and UI messages
- Added utility class for dynamic test data generation
- Added Playwright fixtures for reusable page object initialization
- Added smoke and regression tags for selective test execution
- Added dashboard smoke test for CI validation
- Created a pull request and verified successful GitHub Actions execution

---

# 👩‍💻 Author

**Lekshmi Mahadevan**

Automation QA Engineer

## Skills

- Playwright
- TypeScript
- UI Automation
- API Testing
- End-to-End Automation
- Page Object Model
- Test Automation Framework Development
- GitHub Actions
- CI/CD