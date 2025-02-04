const yaml = require('js-yaml');

module.exports = function (doc, handler, router) {
    const apiSpec = yaml.load(doc);

    if (Object.hasOwn(handler, 'middlewares')) {
        handler.middlewares.forEach((element) => {
            router.use(element);
        });
    }

    for (const [path, methods] of Object.entries(apiSpec.paths)) {
        for (const [method, { operationId }] of Object.entries(methods)) {
            if (!Object.hasOwn(handler, operationId)) {
                throw new Error(`Handler '${operationId}' not found`);
            }
            router[method.toLowerCase()](path, handler[operationId]);
        }
    }
    return router;
};
