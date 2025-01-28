# MicroXpress Utils

MicroXpress Utils is an npm package that provides all the essential utilities required for the MicroXpress proprietary framework. It simplifies the development of microservices by offering pre-built utility functions, enhancing developer productivity and code maintainability.

---

## Table of Contents

-   [Installation](#installation)
-   [Features](#features)
-   [Usage](#usage)
    -   [Examples](#examples)
-   [Contributing](#contributing)
-   [License](#license)

---

## Installation

Install the package via npm:

```bash
npm install @micro-xpress/utils
```

Or using Yarn:

```bash
yarn add @micro-xpress/utils
```

---

## Features

-   **Logging Utility**: Streamlined logging with log levels.
-   **Error Handling**: Centralized error handling mechanisms.
-   **Config Management**: Simplifies loading and accessing environment-based configurations.
-   **Application Constants**: Pre-built utilities for application constants.

---

## Usage

### Examples

#### Logging

```javascript
const express = require('express');
const { logger } = require('@micro-xpress/utils');
const app = express();
app.use(logger());
```

#### Error Handling

```javascript
const express = require('express');
const { errorHandler } = require('@micro-xpress/utils');
const app = express();
app.listen(3000, () => {
    console.log(`Application running on port 3000`);
});
app.use(errorHandler()); //error handler middleware must be defined at the end to catch all the errors.
```

#### Application Constants

```javascript
const { StatusCode } = require('@micro-xpress/utils');
console.log(StatusCode.OK.statusCode, StatusCode.OK.statusMessage);
```

---

## Contributing

We welcome contributions to MicroXpress Utils! If you have a feature request or find a bug, please open an issue or submit a pull request. Follow the [contribution guidelines](CONTRIBUTING.md) for more details.

---

## License

MicroXpress Utils is licensed under the [MIT License](LICENSE).
