export class Subscription {
	id?: string;
	name: string;
	email: string;
	phone: string;
	school: string;
	equipament: string;
	service: string;
	system?: string;

	private constructor({
		name,
		email,
		equipament,
		phone,
		school,
		service,
		system,
	}: Subscription) {
		return Object.assign(this, {
			name,
			email,
			equipament,
			phone,
			school,
			service,
			system,
		});
	}

	static create({
		name,
		email,
		equipament,
		phone,
		school,
		service,
		system,
	}: Subscription) {
		const subscription = new Subscription({
			name,
			email,
			equipament,
			phone,
			school,
			service,
			system,
		});
		return subscription;
	}
}
