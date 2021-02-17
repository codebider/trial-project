import express from 'express';

import logger from '@server/commons/logger';

function newServer(): express.Application {
    logger.debug('Setup new server');
    const app = express();

    app.get('/health', (_req, res) => {
        return res.json('Document Management API');
    });

    return app;
}

export default newServer;
