import { ErrorRequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import logger from '../../commons/logger';
import { HttpStatusCode } from '../type';

// An error handler must have 4 params
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler<ParamsDictionary, unknown> = (error, req, res, _next) => {
    logger.debug('API Error', error);

    // Unhandled exception
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(error);
};

export default errorHandler;
