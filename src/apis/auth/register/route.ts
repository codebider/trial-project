import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import registerHandler from './handler';
import registerValidator from './validator';

const router = createRoute({
    path: '/register',
    method: HttpMethod.POST,
    validator: {
        body: registerValidator
    },
    handler: registerHandler
});

export default router;
