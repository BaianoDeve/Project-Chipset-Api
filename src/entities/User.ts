export class User {
	id?: string;
	username: string;
	email: string;
	password: string;
	avatar_url: string;

	private constructor(props: User) {
		return Object.assign(this, props);
	}

	static create(props: User) {
		const user = new User(props);
		return user;
	}
}
