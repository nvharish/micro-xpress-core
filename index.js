const express = require('express');
const { errorHandler, logger, StatusCode } = require('@micro-xpress/utils');
const loadRoutes = require('./src/loadRoutes');

/**
 * Bootstraps the framework
 * @author N V Harish <nv.harish@outlook.com>
 * @param {string} doc Swagger specification document
 * @param {Object} handler Handler object to handle the API routes specified in Swagger spec
 * @example const microxpress = require('@micro-xpress/core');
 * const fs = require('fs');
 * const handler = require('./src/api');
 * const doc = fs.readLineSync('/home/workspace/api.yaml', 'utf-8');
 * microxpress(doc, handler);
 */
module.exports = function (doc, handler) {
    process.loadEnvFile();
    const app = express();
    const router = express.Router();

    app.use(express.json());
    app.use(logger());

    app.use(loadRoutes(doc, handler, router));
    // eslint-disable-next-line no-unused-vars
    app.use((_req, _res, _next) => {
        const err = new Error('Route not found');
        err.statusCode = StatusCode.NOT_FOUND;
        err.statusMessage = StatusCode.NOT_FOUND;
        throw err;
    });

    app.listen(process.env.SERVICE_PORT ?? 3000, () => {
        // eslint-disable-next-line no-console
        console.log(
            `Service is running on port ${process.env.SERVICE_PORT ?? 3000}`
        );
    });

    app.use(errorHandler());
};
