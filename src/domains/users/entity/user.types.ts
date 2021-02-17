export interface UserAttributes extends UserType {
    createdAt: Date,
    updatedAt: Date,
}

export interface UserType {
    username: string,
    password: string,
}
