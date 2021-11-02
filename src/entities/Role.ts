export class Role {
	id?: string;
	name: string;
	description: string;

	private constructor(props: Role) {
		return Object.assign(this, props);
	}

	static create(props: Role) {
		const role = new Role(props);
		return role;
	}
}
