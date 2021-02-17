import express from 'express';

import routeLogin from './auth/login/route';

const routes = express.Router();

[routeLogin].forEach((item) => {
    routes.use(item);
});

export default routes;
