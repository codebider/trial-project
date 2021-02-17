import { compareSync, hashSync } from 'bcrypt';
const saltRounds = 10;

export const generateHashPassword = (plaintextPassword: string): string => hashSync(plaintextPassword, saltRounds);

export const checkHashPassword = (plaintextPassword: string, hash: string): boolean =>
    compareSync(plaintextPassword, hash);
