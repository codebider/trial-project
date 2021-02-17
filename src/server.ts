import express from 'express';

function newServer(): express.Application {
    const app = express();

    app.get('/health', (_req, res) => {
        return res.json('Document Management API');
    });

    return app;
}

export default newServer;
