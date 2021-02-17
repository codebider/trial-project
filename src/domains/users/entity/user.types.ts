export interface UserAttributes extends UserType {
    createdAt: Date;
    updatedAt: Date;
}

export interface UserType {
    fullName: string;
    username: string;
    password: string;
}

export interface UserData {
    id: number;
    username: string;
    fullName: string;
    password: string;
}

export interface FindOne {
    username: string;
}
