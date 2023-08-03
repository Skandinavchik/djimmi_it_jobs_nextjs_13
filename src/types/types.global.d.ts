export { }

declare global {
	interface IUser {
		id: number;
		username: string;
		email: string;
		password: string;
		role: string;
		createdAt: Date;
		updatedAt: Date;
	};

	interface IUserData {
		status: 'success' | 'failed';
		user?: IUser;
		message?: string;
	};

	interface ITabsItem {
		id: number;
		title: string;
		content?: JSX.Element;
	};
}