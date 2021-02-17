import { sign, verify } from 'jsonwebtoken';

import config from '@server/commons/config';

const secret = config.get('secretToken');

interface AuthInfo {
    id: number;
}

export const generateAuthToken = (data: AuthInfo, time = 60): string => {
    return sign(data, secret, { expiresIn: time * 60 });
};

export const verifyToken = async (token: string): Promise<AuthInfo> => {
    return new Promise((resolve, reject) => {
        verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
            }
            resolve(decoded as AuthInfo);
        });
    });
};
