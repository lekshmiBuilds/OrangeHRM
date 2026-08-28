[![Playwright Smoke Tests](https://github.com/lekshmiBuilds/OrangeHRM/actions/workflows/playwright-smoke.yml/badge.svg?branch=feature/orangehrm_11Aug26)](https://github.com/lekshmiBuilds/OrangeHRM/actions/workflows/playwright-smoke.yml)

# OrangeHRM Playwright Automation Framework

## 📌 Project Overview

This is an end-to-end UI and API automation framework built using **Playwright** with **TypeScript** for the OrangeHRM application.

The framework follows the **Page Object Model (POM)** design pattern and focuses on clean architecture, reusable components, maintainability, and scalable test automation practices.

It includes automated coverage for authentication, dashboard validation, employee management, admin user management, logout, and authenticated API validation.

The framework also includes **GitHub Actions CI integration** to run smoke tests automatically on push and pull request events.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner
- GitHub Actions
- dotenv
- Allure Reporting

---

## 📂 Project Structure

```text
OrangeHRM
│
├── .github/workflows
│   ├── playwright-smoke.yml
│   └── playwright-regression.yml
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
│   ├── Admin
│   ├── Employee E2E
│   ├── API
│   └── Smoke
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
├── global-setup.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🏗 Framework Highlights

- Page Object Model design pattern
- Reusable Base Page
- Playwright fixtures for page object initialization
- Global Setup with Storage State authentication
- Environment configuration using `.env`
- External JSON test data
- Reusable constants and utility classes
- Dynamic employee ID and username generation
- Smoke and regression test tagging
- UI automation and authenticated API validation
- HTML reporting with screenshots, videos, and traces on failure
- Allure Reporting support
- Cross-browser execution with Chromium, Firefox, and WebKit
- Mobile device emulation using Playwright device profiles
- GitHub Actions CI integration
- GitHub Actions browser matrix for smoke tests
- Manual regression workflow using GitHub Actions

---

## ✅ Automated Coverage

- Authentication
- Dashboard validation
- Admin user management
- Employee lifecycle flow
- Logout and session validation
- Authenticated API validation

---

## 🔁 GitHub Actions CI

The project includes GitHub Actions workflows for smoke and regression test execution.

### Smoke Test Workflow

Smoke tests run automatically on:

- Push
- Pull request

Workflow file:

```text
.github/workflows/playwright-smoke.yml
```

The smoke workflow runs tests using a browser matrix for:

- Chromium
- Firefox

Smoke test command:

```bash
npx playwright test --grep "@smoke"
```

### Manual Regression Workflow

Regression tests can be triggered manually from GitHub Actions using `workflow_dispatch`.

Workflow file:

```text
.github/workflows/playwright-regression.yml
```

Regression test command:

```bash
npx playwright test --grep "@regression" --project=chromium
```

---

## ▶️ Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Execute Tests

Run all tests:

```bash
npx playwright test
```

Run smoke tests:

```bash
npx playwright test --grep "@smoke"
```

Run regression tests:

```bash
npx playwright test --grep "@regression"
```

Run tests on a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run mobile emulation smoke tests:

```bash
npx playwright test --grep "@smoke" --project=mobile-chrome
npx playwright test --grep "@smoke" --project=mobile-safari
```

Run employee E2E test:

```bash
npx playwright test "tests/Employee E2E/addeditdeleteEmployee.spec.ts"
```

Run API validation test:

```bash
npx playwright test tests/API/apiValidation.spec.ts
```

---

## 📊 Reporting

View the Playwright HTML report:

```bash
npx playwright show-report
```

Generate Allure report:

```bash
npx allure-commandline generate allure-results --clean -o allure-report
```

Open Allure report:

```bash
npx allure-commandline open allure-report
```

The framework captures screenshots, videos, and trace files on failure.

---

## 🔮 Future Enhancements

- Additional API automation scenarios
- Enhanced CI reporting
- Docker support
- Test data cleanup strategy
- Logger utility
- Test annotations and test case metadata

---

## 📌 Project Progress

### 25 Aug 2026

Phase 2 updates:

- Integrated GitHub Actions CI workflow
- Configured smoke tests to run on push and pull request events
- Added GitHub repository secrets for environment-specific values
- Updated Playwright execution for CI-safe headless mode
- Added reusable Playwright fixtures for page object initialization
- Added constants for routes and UI messages
- Added utility class for dynamic test data generation
- Added smoke and regression test tags for selective execution
- Added dashboard smoke test for CI validation
- Updated README with CI badge and project progress

### 28 Aug 2026

Phase 3 updates:

- Added Allure Reporting support
- Generated and opened Allure reports locally
- Added cross-browser execution for Chromium, Firefox, and WebKit
- Added mobile device emulation support using Playwright device profiles
- Added GitHub Actions browser matrix for smoke tests
- Configured Chromium and Firefox smoke tests in CI
- Added browser-specific Playwright report artifacts
- Added manual regression workflow using GitHub Actions
- Configured manual regression execution using `workflow_dispatch`

---

## 👩‍💻 Author

**Lekshmi Mahadevan**

Automation QA Engineer
**Skills:** Playwright · TypeScript · UI Automation · API Testing · Page Object Model · Test Automation Framework Development · GitHub Actions · CI/CD