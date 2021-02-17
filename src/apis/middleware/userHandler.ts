import express from 'express';

import logger from '@server/commons/logger';
import { verifyToken } from '@server/commons/utils/jwt';
import errorCode from '@server/commons/errors/errorCode';
const userHandler: express.RequestHandler = async (req, res, next) => {
    let token = req.get('Authorization');
    logger.debug('Token auth', token);
    if (token && token.startsWith('Bearer ')) {
        token = token.substring(7, token.length);
    }

    const userInfo = await verifyToken(token as string).catch(() => {
        throw errorCode.UN_AUTHORIZED;
    });

    req.user = userInfo;

    next();
};

export default userHandler;
