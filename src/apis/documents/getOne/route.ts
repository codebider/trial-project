import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import handler from './handler';
import validator from './validator';

const router = createRoute({
    path: '/documents/one',
    method: HttpMethod.GET,
    isAuth: true,
    validator: {
        query: validator
    },
    handler
});

export default router;
