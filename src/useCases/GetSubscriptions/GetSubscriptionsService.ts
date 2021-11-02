import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';

export class GetSubscriptionsService {
	constructor(private subscriptionsRepository: SubscriptionsRepository) {}

	async execute() {
		const subscriptions = await this.subscriptionsRepository.getAll();

		return subscriptions;
	}
}
