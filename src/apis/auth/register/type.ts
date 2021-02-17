export interface RegisterResponse {
    fullName: string;
    username: string;
}

export interface RegisterRequest {
    username: string;
    fullName: string;
    password: string;
}
