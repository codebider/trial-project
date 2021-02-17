import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';

import logger from '@server/commons/logger';
import routes from '@server/apis/routes';
import errorHandler from '@server/apis/middleware/errorHandler';

function newServer(): express.Application {
    logger.debug('Setup new server');
    const app = express();

    app.get('/health', (_req, res) => {
        return res.json('Document Management API');
    });

    app.use(bodyParser.json());

    app.use('/v1', routes);

    app.use(errorHandler);

    return app;
}

export default newServer;
