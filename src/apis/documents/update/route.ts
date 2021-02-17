import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import handler from './handler';
import { validatorBody, validatorParams } from './validator';

const router = createRoute({
    path: '/documents/:id',
    method: HttpMethod.PUT,
    isAuth: true,
    validator: {
        body: validatorBody,
        params: validatorParams
    },
    handler
});

export default router;
