import * as yup from 'yup';
import express from 'express';

import { validateRequest } from '@server/apis/utils';

describe('validateRequest', () => {
    let request: express.RequestHandler;
    beforeEach(() => {
        const validator = yup.object({
            username: yup.string().required(),
            password: yup.string().required()
        });

        request = validateRequest({
            body: validator
        });
    });

    it('should throw error', async () => {
        const req = {
            body: {}
        };
        await expect(request(req as any, null as any, null as any)).rejects.toThrow('password is a required field');
    });

    it('should pass validation', async () => {
        const req = {
            body: {
                password: '123',
                username: '123333'
            }
        };
        const next = jest.fn();
        const result = await request(req as any, null as any, next);
        expect(result).toBeUndefined();
        expect(next).toBeCalled();
        expect(next).toBeCalledWith();
    });

    it('should pass validation when dont have validation', async () => {
        const req = {};
        const next = jest.fn();
        const result = await validateRequest()(req as any, null as any, next);
        expect(result).toBeUndefined();
        expect(next).toBeCalled();
        expect(next).toBeCalledWith();
    });
});
