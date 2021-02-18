import express from 'express';

import routeLogin from './auth/login/route';
import routeRegister from './auth/register/route';
import routeDocumentCreate from './documents/create/route';
import routeDocumentUpdate from './documents/update/route';
import routeDocumentDelete from './documents/delete/route';
import routeDocumentList from './documents/list/route';
import routeDocumentGetOne from './documents/getOne/route';
import routeDocumentGetById from './documents/get/route';

const routes = express.Router();

const list = [
    routeLogin,
    routeRegister,
    routeDocumentCreate,
    routeDocumentUpdate,
    routeDocumentDelete,
    routeDocumentList,
    routeDocumentGetOne,
    routeDocumentGetById
];

list.forEach((item) => {
    routes.use(item);
});

export default routes;
