export interface UpdateBy {
    name?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    ktpNumber?: string;
    npwpNumber?: string;
    passportNumber?: string;
}

export interface FindOne {
    id?: number;
    userId?: number;
    name?: string;
    email?: string;
    ktpNumber?: string;
    npwpNumber?: string;
}

export interface FindAll {
    id?: number;
    userId?: number;
    ktpNumber?: string;
    npwpNumber?: string;
}
