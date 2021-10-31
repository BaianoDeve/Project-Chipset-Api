import { prisma } from '@/prisma';
import {
	ISubscriptionsRepository,
	Subscription,
} from '@repositories/ISubscriptionsRepository';

export class SubscriptionsRepository implements ISubscriptionsRepository {
	async findByEmail(email: string) {
		const subscription = await prisma.subscription.findFirst({
			where: {
				email,
			},
		});

		return subscription;
	}

	async saveSubscription(subscriptionData: Subscription) {
		const subscriptionCreate = await prisma.subscription.create({
			data: subscriptionData,
		});

		return subscriptionCreate;
	}

	async getAllSubscriptions() {
		const subscriptions = await prisma.subscription.findMany();

		return subscriptions;
	}
}
