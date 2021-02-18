export interface CreateDocumentResponse {
    id: number;
    name: string;
    email: string;
}

export interface CreateDocumentRequest {
    name: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    ktpNumber?: string;
    npwpNumber?: string;
    passportNumber?: string;
}
