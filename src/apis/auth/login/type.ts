export interface LoginResponse {
    token: string;
    fullName: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}
