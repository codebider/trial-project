import * as http from 'http';
import logger from '@server/commons/logger';
import newServer from './server';
import config from '@server/commons/config';

function startServer(): void {
    const app = newServer();
    const port = config.get('port');
    const host = config.get('host');

    http.createServer(app).listen(port, host, () => {
        logger.log(`Server ready at http://${host}:${port}`);
    });
}

startServer();
