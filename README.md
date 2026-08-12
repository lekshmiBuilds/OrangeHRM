# OrangeHRM Automation Framework using Playwright

## 📌 Project Overview

This project is an end-to-end UI and API automation framework built using **Playwright with TypeScript** following the **Page Object Model (POM)** design pattern.

The framework automates major OrangeHRM workflows such as Login, User Management, Employee Management, Logout, and API validation while following clean coding practices and reusable components.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test Runner

---

## 📂 Project Structure

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
│   └── LogoutPage.ts
│
├── tests
│   ├── auth.setup.ts
│   ├── loginpage.spec.ts
│   ├── adminpage.spec.ts
│   ├── adduser.spec.ts
│   ├── addEmployee.spec.ts
│   ├── logout.spec.ts
│   └── apiValidation.spec.ts
│
├── test-data
│   ├── login.json
│   ├── users.json
│   ├── employee.json
│   └── profile.jpg
│
├── playwright.config.ts
├── package.json
├── README.md
└── playwright-report
```

---

## 🏗 Framework Design

The framework follows the **Page Object Model (POM)**.

Each page is implemented as an individual class responsible for interacting with only that page.

A common **BasePage** contains reusable functionality shared across all pages.

Test data is maintained separately using JSON files to improve maintainability and reusability.

---

## ✅ Automated Test Scenarios

### Login

- Login using valid credentials
- Verify successful login

---

### Admin Module

- Navigate to Admin
- Add User
- Search User
- Delete User
- Verify User Deletion

---

### Employee Module (PIM)

- Navigate to PIM
- Add Employee
- Upload Profile Picture
- Verify Employee Creation

---

### Logout

- Logout successfully
- Verify redirection to Login page

---

### API Validation

- Authenticate using Playwright Storage State
- Execute authenticated API request
- Validate HTTP Status Code
- Validate API response

---

## 📄 Test Data

Test data is maintained separately under the **test-data** folder.

```
login.json
users.json
employee.json
```

This approach avoids hardcoded values inside test scripts.

---

## 🔐 Authentication

The framework uses **Playwright Storage State** for authentication.

A dedicated setup test logs into OrangeHRM once and stores the authenticated session.

All subsequent tests reuse the same authentication state.

---

## 📊 Reporting

The framework generates:

- HTML Report
- Screenshots
- Trace Files
- Video Recording

---

## ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
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

## ▶️ Execute All Tests

```bash
npx playwright test
```

---

## ▶️ Execute Individual Tests

Login Test

```bash
npx playwright test tests/loginpage.spec.ts
```

Admin Test

```bash
npx playwright test tests/adminpage.spec.ts
```

Add User Test

```bash
npx playwright test tests/adduser.spec.ts
```

Add Employee Test

```bash
npx playwright test tests/addEmployee.spec.ts
```

Logout Test

```bash
npx playwright test tests/logout.spec.ts
```

API Validation

```bash
npx playwright test tests/apiValidation.spec.ts
```

---

## 📈 View HTML Report

```bash
npx playwright show-report
```

---

## Features Implemented
- Page Object Model
- Base Page
- Reusable Components
- JSON Test Data
- Dynamic Test Data Generation
- Storage State Authentication
- UI Automation
- API Automation
- HTML Reporting
- Screenshot Capture
- Video Recording
- Trace Generation

---

## Future Enhancements
- Cross Browser Execution
- CI/CD Integration (GitHub Actions / Azure DevOps)
- Data-driven execution using CSV/Excel
- Allure Reporting
- Parallel Execution Optimization

---

## Author

**Lekshmi Mahadevan**
Automation QA Engineer
Playwright | TypeScript | API Testing | End-to-End Automation