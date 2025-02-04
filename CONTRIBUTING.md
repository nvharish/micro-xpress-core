# Contributing to MicroXpress Core

Thank you for considering contributing to **MicroXpress Core**! Your contributions are essential for improving and maintaining this project. Please follow the guidelines below to ensure a smooth contribution process.

---

## How to Contribute

### 1. Reporting Issues

-   Search the [issue tracker](https://github.com/nvharish/micro-xpress-core/issues) to ensure the problem hasn’t been reported yet.
-   If not found, create a [new issue](https://github.com/nvharish/micro-xpress-core/issues/new).
-   Provide as much detail as possible, including:
    -   Steps to reproduce the issue.
    -   Expected and actual results.
    -   Any error messages or screenshots.

### 2. Suggesting Features

-   Open a feature request in the [issue tracker](https://github.com/nvharish/micro-xpress-core/issues/new).
-   Clearly describe the feature and its use case.
-   Include examples of how it might be used, if possible.

### 3. Submitting Code Changes

#### Step 1: Fork and Clone the Repository

1. Fork the repository from [GitHub](https://github.com/nvharish/micro-xpress-core).
2. Clone your forked repository locally:
    ```bash
    git clone https://github.com/nvharish/micro-xpress-core.git
    cd micro-xpress-core
    ```

#### Step 2: Create a New Branch

Create a feature branch for your changes:

```bash
git checkout -b feature/my-awesome-feature
```

#### Step 3: Write Code and Tests

-   Follow the code style used in the repository.
-   Write tests for your changes to ensure they work as expected.
-   Use clear and descriptive commit messages.

#### Step 4: Run Tests

Ensure that all tests pass before submitting your changes:

```bash
npm test
```

#### Step 5: Run Lint

Ensure that all lint issues are fixed before submitting your changes:

```bash
npm run lint
```

To fix the fixable issues (if any) automatically:

```bash
npm run lint:fix
```

#### Step 6: Update Packages

Ensure that all packages are up to date:

```bash
npm run outdated
```

Update packages (if any outdated packages exists):

```bash
npm run outdated:fix
```

#### Step 7: Fix Vulnerabilities

Ensure that all vulnerablities are fixed:

```bash
npm run audit
```

To fix vulnerabilities:

```bash
npm run audit:fix
```

#### Step 8: Submit a Pull Request

1. Push your branch to your forked repository:
    ```bash
    git push origin feature/my-awesome-feature
    ```
2. Open a pull request to the `main` branch of the original repository.
3. Provide a clear description of the changes, including:
    - The problem your code solves.
    - How the changes were implemented.
    - Any trade-offs or concerns.

---

## Development Guidelines

-   Use [semantic versioning](https://semver.org/) for changes.
-   Follow the [JavaScript Standard Style](https://standardjs.com/) for code formatting.
-   Document new features and utilities in the `README.md`.

---
