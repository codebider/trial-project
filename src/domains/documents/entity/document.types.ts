export interface DocumentAttributes extends DocumentType {
    createdAt: Date;
    updatedAt: Date;
}

export interface DocumentType {
    userId: number;
    name: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    ktpNumber?: string;
    npwpNumber?: string;
    passportNumber?: string;
}

export interface DocumentData extends DocumentType {
    id: number;
}
