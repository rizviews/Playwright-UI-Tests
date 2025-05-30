# Playwright UI Tests with Cucumber and TypeScript

This project demonstrates UI automation for the Parabank demo site using Playwright, Cucumber (BDD), and TypeScript.

## Features

- BDD-style feature files with Cucumber
- Page Object Model for maintainable test code
- TypeScript for type safety
- ESLint and Prettier for code quality
- GitHub Actions workflow for CI

## Project Structure

```
├── cucumber.json                # Cucumber configuration
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # NPM scripts and dependencies
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── src/
│   ├── pageObjects/
│   │   ├── pages/               # Page Object classes
│   │   └── locators/            # Locators (optional)
│   └── support/                 # Custom world, hooks, etc.
├── tests/
│   ├── features/                # Cucumber feature files
│   └── steps/                   # Step definitions
└── test-results/                # Test and report output
```

## Test Overview

This project includes the following automated test cases:

- **Landing Page**
  - Verifies the landing page loads successfully
  - Checks for the presence of the "Customer Login" section
  - Checks for the "Register" link
  - Checks for the "Online Services" item header
  - Validates error message when logging in with empty credentials

- **Accounts Overview**
  - Logs in as a valid user
  - Navigates to the Accounts Overview page
  - Verifies the accounts overview table is visible
  - Verifies at least one account is listed

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Run tests

```sh
npm test
```

Or directly:

```sh
npx cucumber-js -c cucumber.json
```

### 3. View reports

- After running tests, open `test-results/cucumber-report.html` in your browser for a detailed report.

## Writing Tests

- Feature files are in `tests/features/` (Gherkin syntax)
- Step definitions are in `tests/steps/`
- Page objects are in `src/pageObjects/pages/`

## Linting & Formatting

- Lint: `npx eslint . --ext .ts --fix --ignore-pattern eslint.config.mjs`
- Format: `npx prettier --write .`

## Continuous Integration

- GitHub Actions workflow in `.github/workflows/playwright.yml` runs tests on push and pull request.

## Useful Scripts

- `npm test` — Run all Cucumber tests

## Example: Run a Single Feature File

To run only the Accounts Overview feature:

```sh
npx cucumber-js tests/features/accounts-overview.feature -c cucumber.json
```

To run a single feature file with a tag (e.g., @smoke):

```sh
npx cucumber-js tests/features/accounts-overview.feature --tags @smoke -c cucumber.json
```

## Notes

- Make sure your feature and step definition paths in `cucumber.json` match your folder structure.
- The project uses a custom world for Playwright page/context/browser management.
- Update selectors in page objects as needed for your application.

---

## TODO

- Implement a centralized locator management system for easier maintenance and updates (e.g., use locator files or constants in `src/pageObjects/locators/`).
- Expand and validate cross-browser support (ensure tests run reliably on Chromium, Firefox, and WebKit).
- Create a reusable GitHub Actions workflow for Playwright+Cucumber projects to enable easy CI setup across repositories.
- Add more positive and negative test scenarios to increase coverage and robustness.
- Make tests configurable by allowing arguments (such as environment, browser, or baseURL) to be passed from the CLI and used in the test run.
