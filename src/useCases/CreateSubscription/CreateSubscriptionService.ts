import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';
import { CreateSubscriptionRequestDTO } from './CreateSubscriptionDTO';

export class CreateSubscriptionService {
	constructor(private subscriptionsRepository: SubscriptionsRepository) {}

	async execute(subscriptionData: CreateSubscriptionRequestDTO) {
		const subscriptionAlreadyExists =
			await this.subscriptionsRepository.findByEmail(subscriptionData.email);

		if (subscriptionAlreadyExists) {
			throw new Error('Subscription already exists!');
		}

		const subscription = await this.subscriptionsRepository.saveSubscription(
			subscriptionData
		);

		return subscription;
	}
}
