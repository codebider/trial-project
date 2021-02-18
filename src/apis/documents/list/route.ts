import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';

import handler from './handler';

const router = createRoute({
    path: '/documents',
    method: HttpMethod.GET,
    isAuth: true,
    handler
});

export default router;
