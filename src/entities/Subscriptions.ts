export class Subscription {
	id?: string;
	name: string;
	email: string;
	phone: string;
	school: string;
	equipament: string;
	service: string;
	system?: string;

	private constructor(props: Subscription) {
		return Object.assign(this, props);
	}

	static create(props: Subscription) {
		const subscription = new Subscription(props);
		return subscription;
	}
}
