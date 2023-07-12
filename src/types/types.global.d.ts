export { }

declare global {
    interface IUser {
        id: string;
        username: string;
        email: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    };

    interface IUserData {
        status: string;
        user: IUser;
    };

    interface ITabsItem {
        title: string;
    };
}