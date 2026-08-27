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

---

## 📂 Project Structure

```text
OrangeHRM
│
├── .github/workflows
│   └── playwright-smoke.yml
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
- GitHub Actions CI integration
- HTML reporting with screenshots, videos, and traces on failure
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

The project includes a GitHub Actions workflow to run smoke tests automatically on:

- Push
- Pull request

Workflow file:

```text
.github/workflows/playwright-smoke.yml
```

Smoke tests can be executed using:

```bash
npx playwright test --grep "@smoke"
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

The framework captures screenshots, videos, and trace files on failure.

---

## 🔮 Future Enhancements

- Allure Reporting
- Cross-browser execution using Firefox and WebKit
- Manual regression workflow in GitHub Actions
- GitHub Actions browser matrix execution
- Additional API automation scenarios
- Enhanced CI reporting

---

## 📌 Project Progress

### 25 Aug 2026

Latest framework updates:
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

---

## 👩‍💻 Author

**Lekshmi Mahadevan**
Automation QA Engineer

**Skills:** Playwright · TypeScript · UI Automation · API Testing · Page Object Model · Test Automation Framework Development · GitHub Actions · CI/CD
