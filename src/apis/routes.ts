import express from 'express';

import routeLogin from './auth/login/route';
import routeRegister from './auth/register/route';

const routes = express.Router();

const list = [routeLogin, routeRegister];

list.forEach((item) => {
    routes.use(item);
});

export default routes;
