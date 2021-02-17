import logger from '@server/commons/logger';
import config from '@server/commons/config';

import * as http from 'http';

import newServer from './server';

function startServer(): void {
    const app = newServer();
    const port = config.get('port');
    const host = config.get('host');

    http.createServer(app).listen(port, host, () => {
        logger.log(`Server ready at http://${host}:${port}`);
    });
}

startServer();
