import bcrypt from 'bcrypt';
const saltRounds = 10;

export const generateHashPassword = (plaintextPassword: string): string => bcrypt.hashSync(plaintextPassword, saltRounds);

export const checkHashPassword = (plaintextPassword: string, hash: string): boolean => bcrypt.compareSync(plaintextPassword, hash);
