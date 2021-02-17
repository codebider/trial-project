export interface UpdateDocumentResponse {
    id: number;
    name: string;
    email: string;
}

export interface UpdateDocumentRequest {
    name: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    ktpNumber?: string;
    npwpNumber?: string;
    passportNumber?: string;
}
