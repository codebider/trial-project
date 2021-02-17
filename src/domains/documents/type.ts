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
    userId: string;
    ktpNumber?: string;
    npwpNumber?: string;
}
