import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import loginHandler from './handler';
import loginValidator from './validator';

const router = createRoute({
    path: '/login',
    method: HttpMethod.POST,
    validator: {
        body: loginValidator
    },
    handler: loginHandler
});

export default router;
