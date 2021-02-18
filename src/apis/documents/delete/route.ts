import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import handler from './handler';
import { validatorParams } from './validator';

const router = createRoute({
    path: '/documents/:id',
    method: HttpMethod.DELETE,
    isAuth: true,
    validator: {
        params: validatorParams
    },
    handler
});

export default router;
