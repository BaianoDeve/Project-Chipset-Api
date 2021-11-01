export class User {
	id?: string;
	username: string;
	email: string;
	password: string;
	avatar_url: string;

	private constructor({ username, email, password, avatar_url }: User) {
		return Object.assign(this, {
			username,
			email,
			password,
			avatar_url,
		});
	}

	static create({ username, email, password, avatar_url }: User) {
		const user = new User({ username, email, password, avatar_url });
		return user;
	}
}
