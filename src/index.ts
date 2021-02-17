import newServer from './server';
import * as http from 'http';

const port = 3000;

function startServer(): void {
    const app = newServer();

    http.createServer(app).listen(port, () => {
        console.log(`Server ready at http://localhost:${port}`);
    });
}

startServer();
