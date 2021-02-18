import logger from '@server/commons/logger';
import config from '@server/commons/config';

import * as http from 'http';

import newServer from './server';

function startServer(): void {
    const app = newServer();
    const port = config.get('port');
    const host = config.get('host');

    const server = http.createServer(app).listen(port, host, () => {
        app.emit('listening');
        logger.log(`Server ready at http://${host}:${port}`);
    });

    process.on('SIGINT', function () {
        app.emit('close');
        server.close(function () {
            process.exit(0);
        });
    });
}

startServer();
