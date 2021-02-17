import express from 'express';

import { Handler, Route, Validator } from '@server/apis/type';

const validateRequest = (validate?: Validator): express.RequestHandler => {
    return async (req, _res, next) => {
        if (!validate) {
            return next();
        }
        req.headers = await validate.headers?.validate(req.headers);
        req.params = await validate.params?.validate(req.params);
        req.query = await validate.query?.validate(req.query);
        req.body = await validate.body?.validate(req.body);
        next();
    };
};

const asyncHandler = <ResponseBody>(handler: Handler<ResponseBody>): express.RequestHandler => {
    return async (req, res, next): Promise<void> => {
        try {
            const response = await handler(req, res, next);
            res.status(response.statusCode).send(response.body);
        } catch (err) {
            throw err;
        }
    };
};

export const createRoute = (route: Route): express.Router => {
    const router = express.Router();

    router[route.method](route.path, validateRequest(route?.validator), asyncHandler(route.handler));

    return router;
};
