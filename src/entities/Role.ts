export class Role {
	id?: string;
	name: string;
	description: string;

	private constructor({ name, description }: Role) {
		return Object.assign(this, {
			name,
			description,
		});
	}

	static create({ name, description }: Role) {
		const role = new Role({ name, description });
		return role;
	}
}
