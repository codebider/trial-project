import express from 'express';

function newServer(): express.Application {
    const app = express();

    app.get('/health', (_req, res) => {
        return res.json({
            status: 'success'
        });
    });

    return app;
}

export default newServer;
