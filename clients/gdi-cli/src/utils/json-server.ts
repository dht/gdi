const jsonServer = require('json-server');

export const init = (dbPath: string) => {
    const router = jsonServer.router(dbPath);

    return router;
};

const api = {};

module.exports = {
    init,
    api,
};
