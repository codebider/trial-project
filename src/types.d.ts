declare namespace Express {
    interface UserAuth {
        id: number;
    }
    export interface Request {
        user: UserAuth;
    }
}
