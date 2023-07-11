export interface IUser {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
};

export interface IUserData {
    status: string;
    user: IUser;
};