import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from '@server/commons/logger';
import routes from '@server/apis/routes';
import errorHandler from '@server/apis/middleware/errorHandler';
import { startJobs } from '@server/jobs';

function newServer(): express.Application {
    logger.debug('Setup new server');
    const app = express();

    app.use(cors());

    app.get('/health', (_req, res) => {
        return res.json('Document Management API');
    });

    app.use(bodyParser.json());

    app.use('/v1', routes);

    app.use(errorHandler);

    app.on('listening', function () {
        // server ready to accept connections here
        const cancel = startJobs();
        app.on('close', () => cancel());
    });

    return app;
}

export default newServer;
