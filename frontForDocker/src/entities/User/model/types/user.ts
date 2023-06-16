export interface IUser {
    id: string,
    username: string,
    password?: string,
}

export interface IUserSchema {
    isReady: boolean;
    authData?: IUser,
}
