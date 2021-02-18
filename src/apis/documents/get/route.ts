import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import handler from './handler';
import validator from './validator';

const router = createRoute({
    path: '/documents/:id',
    method: HttpMethod.GET,
    isAuth: true,
    validator: {
        params: validator
    },
    handler
});

export default router;
