import { createRoute } from '@server/apis/utils';
import { HttpMethod } from '@server/apis/type';
import loginHandler from '@server/apis/auth/login/handler';

const router = createRoute({
    path: '/login',
    method: HttpMethod.POST,
    handler: loginHandler
});

export default router;
