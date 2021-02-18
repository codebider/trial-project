import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import handler from './handler';
import validator from './validator';

const router = createRoute({
    path: '/documents',
    method: HttpMethod.POST,
    isAuth: true,
    validator: {
        body: validator
    },
    handler
});

export default router;
