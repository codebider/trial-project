import express from 'express';

import routeLogin from './auth/login/route';
import routeRegister from './auth/register/route';
import routeDocumentCreate from './documents/create/route';
import routeDocumentUpdate from './documents/update/route';
import routeDocumentDelete from './documents/delete/route';

const routes = express.Router();

const list = [routeLogin, routeRegister, routeDocumentCreate, routeDocumentUpdate, routeDocumentDelete];

list.forEach((item) => {
    routes.use(item);
});

export default routes;
