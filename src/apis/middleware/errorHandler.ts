import { ErrorRequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { AppError } from '@server/commons/errors/AppError';
import { getUnhandledError } from '@server/commons/errors/utils';

import logger from '../../commons/logger';

// An error handler must have 4 params
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler<ParamsDictionary, unknown> = (error, req, res, _next) => {
    logger.debug('API Error', error);

    if (error instanceof AppError) {
        return res.status(error.getStatusCode()).send(error.toResponse());
    }
    // Unhandled exception
    const err = getUnhandledError(error);
    res.status(err.getStatusCode()).send(err.toResponse());
};

export default errorHandler;
