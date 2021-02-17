import express from 'express';

import { Handler, Route, Validator } from '@server/apis/type';
import errorCode from '@server/commons/errors/errorCode';
import emptyHandler from '@server/apis/middleware/emptyHandler';
import userHandler from '@server/apis/middleware/userHandler';

export const validateRequest = (validate?: Validator): express.RequestHandler => {
    return async (req, _res, next) => {
        if (!validate) {
            return next();
        }
        try {
            req.headers = await validate.headers?.validate(req.headers);
            req.params = await validate.params?.validate(req.params);
            req.query = await validate.query?.validate(req.query);
            req.body = await validate.body?.validate(req.body);
        } catch (error) {
            throw errorCode.VALIDATOR_ERROR(error.message);
        }
        next();
    };
};

export const asyncHandler = <ResponseBody>(handler: Handler<ResponseBody>): express.RequestHandler => {
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

    router[route.method](
        route.path,
        route.isAuth ? userHandler : emptyHandler,
        validateRequest(route?.validator),
        asyncHandler(route.handler)
    );

    return router;
};
