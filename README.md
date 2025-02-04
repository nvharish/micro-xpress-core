# MicroXpress Core

MicroXpress Core is the foundational package of the **MicroXpress** proprietary framework. It provides core functionalities for building scalable and efficient microservices using Node.js. This package includes essential utilities like routing, middleware handling, error handling, logging, configuration management, and request/response lifecycle management.

---

## Table of Contents

-   [Installation](#installation)
-   [Features](#features)
-   [Getting Started](#getting-started)
    -   [Creating a MicroXpress Service](#creating-a-microxpress-service)
    -   [Defining Routes and Handlers](#defining-routes-handlers)
-   [Configuration](#configuration)
-   [Logging](#logging)
-   [Middleware](#middleware)
-   [Error Handling](#error-handling)
-   [Contributing](#contributing)
-   [License](#license)

---

## Installation

Install the package via npm:

```bash
npm install @micro-xpress/core
```

Or using Yarn:

```bash
yarn add @micro-xpress/core
```

---

## Features

-   **Swagger-Based Routing**: Define the Swagger API specification and handlers using the operation ID to process requests.
-   **Middleware Support**: Use built-in and custom middleware for request processing.
-   **Logging**: Configured with the Morgan logger for enhanced request logging.
-   **Configuration Management**: Load environment-based configurations dynamically.
-   **Error Handling**: Centralized error handling with structured responses.
-   **Request Lifecycle Management**: Manage request processing efficiently.

---

## Getting Started

### Creating a MicroXpress Service

Set up a new MicroXpress service using `@micro-xpress/core`:

```javascript
const microxpress = require('@micro-xpress/core');
const handler = require('./src/api.js');
const fs = require('fs');
const path = require('path');

const doc = fs.readFileSync(path.join(__dirname, 'spec', 'api.yaml'), 'utf-8');
microxpress(doc, handler);
```

### Defining Routes and Handlers

```yaml
openapi: 3.0.3
info:
    title: Swagger Petstore - OpenAPI 3.0
    description: |-
        This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
        Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
        You can now help us improve the API whether it's by making changes to the definition itself or to the code.
        That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

        _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

        Some useful links:
        - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
        - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
    termsOfService: http://swagger.io/terms/
    contact:
        email: apiteam@swagger.io
    license:
        name: Apache 2.0
        url: http://www.apache.org/licenses/LICENSE-2.0.html
    version: 1.0.11
externalDocs:
    description: Find out more about Swagger
    url: http://swagger.io
servers:
    - url: https://petstore3.swagger.io/api/v3
tags:
    - name: pet
      description: Everything about your Pets
      externalDocs:
          description: Find out more
          url: http://swagger.io
    - name: store
      description: Access to Petstore orders
      externalDocs:
          description: Find out more about our store
          url: http://swagger.io
    - name: user
      description: Operations about user
paths:
    /pet:
        get:
            tags:
                - pet
            summary: Update an existing pet
            description: Update an existing pet by Id
            operationId: updatePet
            requestBody:
                description: Update an existent pet in the store
                content:
                    application/json:
                        schema:
                            $ref: '#/components/schemas/Pet'
                    application/xml:
                        schema:
                            $ref: '#/components/schemas/Pet'
                    application/x-www-form-urlencoded:
                        schema:
                            $ref: '#/components/schemas/Pet'
                required: true
            responses:
                '200':
                    description: Successful operation
                    content:
                        application/json:
                            schema:
                                $ref: '#/components/schemas/Pet'
                        application/xml:
                            schema:
                                $ref: '#/components/schemas/Pet'
                '400':
                    description: Invalid ID supplied
                '404':
                    description: Pet not found
                '422':
                    description: Validation exception
            security:
                - petstore_auth:
                      - write:pets
                      - read:pets
        post:
            tags:
                - pet
            summary: Add a new pet to the store
            description: Add a new pet to the store
            operationId: addPet
            requestBody:
                description: Create a new pet in the store
                content:
                    application/json:
                        schema:
                            $ref: '#/components/schemas/Pet'
                    application/xml:
                        schema:
                            $ref: '#/components/schemas/Pet'
                    application/x-www-form-urlencoded:
                        schema:
                            $ref: '#/components/schemas/Pet'
                required: true
            responses:
                '200':
                    description: Successful operation
                    content:
                        application/json:
                            schema:
                                $ref: '#/components/schemas/Pet'
                        application/xml:
                            schema:
                                $ref: '#/components/schemas/Pet'
                '400':
                    description: Invalid input
                '422':
                    description: Validation exception
            security:
                - petstore_auth:
                      - write:pets
                      - read:pets
components:
    schemas:
        Order:
            type: object
            properties:
                id:
                    type: integer
                    format: int64
                    example: 10
                petId:
                    type: integer
                    format: int64
                    example: 198772
                quantity:
                    type: integer
                    format: int32
                    example: 7
                shipDate:
                    type: string
                    format: date-time
                status:
                    type: string
                    description: Order Status
                    example: approved
                    enum:
                        - placed
                        - approved
                        - delivered
                complete:
                    type: boolean
            xml:
                name: order
        Customer:
            type: object
            properties:
                id:
                    type: integer
                    format: int64
                    example: 100000
                username:
                    type: string
                    example: fehguy
                address:
                    type: array
                    xml:
                        name: addresses
                        wrapped: true
                    items:
                        $ref: '#/components/schemas/Address'
            xml:
                name: customer
        Address:
            type: object
            properties:
                street:
                    type: string
                    example: 437 Lytton
                city:
                    type: string
                    example: Palo Alto
                state:
                    type: string
                    example: CA
                zip:
                    type: string
                    example: '94301'
            xml:
                name: address
        Category:
            type: object
            properties:
                id:
                    type: integer
                    format: int64
                    example: 1
                name:
                    type: string
                    example: Dogs
            xml:
                name: category
        User:
            type: object
            properties:
                id:
                    type: integer
                    format: int64
                    example: 10
                username:
                    type: string
                    example: theUser
                firstName:
                    type: string
                    example: John
                lastName:
                    type: string
                    example: James
                email:
                    type: string
                    example: john@email.com
                password:
                    type: string
                    example: '12345'
                phone:
                    type: string
                    example: '12345'
                userStatus:
                    type: integer
                    description: User Status
                    format: int32
                    example: 1
            xml:
                name: user
        Tag:
            type: object
            properties:
                id:
                    type: integer
                    format: int64
                name:
                    type: string
            xml:
                name: tag
        Pet:
            required:
                - name
                - photoUrls
            type: object
            properties:
                id:
                    type: integer
                    format: int64
                    example: 10
                name:
                    type: string
                    example: doggie
                category:
                    $ref: '#/components/schemas/Category'
                photoUrls:
                    type: array
                    xml:
                        wrapped: true
                    items:
                        type: string
                        xml:
                            name: photoUrl
                tags:
                    type: array
                    xml:
                        wrapped: true
                    items:
                        $ref: '#/components/schemas/Tag'
                status:
                    type: string
                    description: pet status in the store
                    enum:
                        - available
                        - pending
                        - sold
            xml:
                name: pet
        ApiResponse:
            type: object
            properties:
                code:
                    type: integer
                    format: int32
                type:
                    type: string
                message:
                    type: string
            xml:
                name: '##default'
    requestBodies:
        Pet:
            description: Pet object that needs to be added to the store
            content:
                application/json:
                    schema:
                        $ref: '#/components/schemas/Pet'
                application/xml:
                    schema:
                        $ref: '#/components/schemas/Pet'
        UserArray:
            description: List of user object
            content:
                application/json:
                    schema:
                        type: array
                        items:
                            $ref: '#/components/schemas/User'
    securitySchemes:
        petstore_auth:
            type: oauth2
            flows:
                implicit:
                    authorizationUrl: https://petstore3.swagger.io/oauth/authorize
                    scopes:
                        write:pets: modify pets in your account
                        read:pets: read your pets
        api_key:
            type: apiKey
            name: api_key
            in: header
```

**Handlers**

```javascript
function updatePet(req, res) {
    const { msg } = req.query;
    return res.json({
        update: msg,
    });
}

function addPet(req, res) {
    console.log('add');
    const { msg } = req.body;
    return res.json({
        add: msg,
    });
}

module.exports = { updatePet, addPet };
```

---

## Configuration

Configuration can be managed through environment variables or a configuration file.

```javascript
console.log(`Service Port: ${process.env.SERVICE_PORT}`);
```

---

## Logging

MicroXpress provides a built-in logging system to manage request logging.

---

## Middleware

Add custom middleware for request processing.

```javascript
//This code is executed for every request to the handler. NOTE: The middlewares will be executed in the order.
const middlewares = [
    (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    },
    (req, res, next) => {
        if (!req.headers.traceId) {
            return res.status(400).json({ message: 'Bad request' });
        }
        next();
    },
];

// A handler that handles PUT requests to the /pet path
function updatePet(req, res) {
    const { msg } = req.query;
    return res.json({
        update: msg,
    });
}

// A middleware sub-stack that handles GET requests to the /user/:id path
router.get(
    '/user/:id',
    (req, res, next) => {
        // if the user ID is 0, skip to the next router
        if (req.params.id === '0') next('route');
        // otherwise pass control to the next middleware function in this stack
        else next();
    },
    (req, res, next) => {
        // render a regular page
        res.render('regular');
    }
);

// A route middleware that handles GET requests to the /user:id NOTE: middlewares will be executed in the order.
const getUser = [
    (req, res, next) => {
        if (req.params.id === '0') {
            throw new Error('Invalid user');
        } else {
            next();
        }
    },
    (req, res) => {
        const user = { id: 1, name: 'John' };
        return res.json({
            user,
        });
    },
];

module.exports = { middlewares, updatePet, getUser };
```

---

## Error Handling

MicroXpress provides a built-in centralized error handling system that ensures structured API responses.

```javascript
// A route middleware that handles GET requests to the /user:id NOTE: middlewares will be executed in the order.
const getUser = [
    (req, res, next) => {
        if (req.params.id === '0') {
            const err = new Error('Invalid user');
            err.code = 400;
            throw err;
            /** Built-in centralized error handler will take care of generating structured API response with status code 400 as follows:
             * {
             *   "status": "ERROR",
             *   "error": "Invalid user"
             * }
             */
        } else {
            next();
        }
    },
    (req, res) => {
        const user = { id: 1, name: 'John' };
        return res.json({
            user,
        });
    },
];

module.exports = { getUser };
```

---

## Contributing

We welcome contributions to **@micro-xpress/core**! If you have a feature request or find a bug, please open an issue or submit a pull request. Follow the [contribution guidelines](CONTRIBUTING.md) for more details.

---

## License

@micro-xpress/core is licensed under the [MIT License](LICENSE).
