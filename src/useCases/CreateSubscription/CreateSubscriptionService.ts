import { Subscription } from '@entities/Subscriptions';
import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';
import { CreateSubscriptionRequestDTO } from './CreateSubscriptionDTO';

export class CreateSubscriptionService {
	constructor(private subscriptionsRepository: SubscriptionsRepository) {}

	async execute(subscriptionData: CreateSubscriptionRequestDTO) {
		const subscriptionAlreadyExists = await this.subscriptionsRepository.exists(
			subscriptionData.email
		);

		if (subscriptionAlreadyExists) {
			throw new Error('Subscription already exists!');
		}

		const subscriptionCreate = Subscription.create(subscriptionData);

		const subscription = await this.subscriptionsRepository.save(
			subscriptionCreate
		);

		return subscription;
	}
}
