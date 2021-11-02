import { prisma } from '@database/client';
import { Subscription } from '@entities/Subscriptions';
import { ISubscriptionsRepository } from '@repositories/ISubscriptionsRepository';

export class SubscriptionsRepository implements ISubscriptionsRepository {
	async exists(email: string) {
		const subscription = await prisma.subscription.findUnique({
			where: {
				email,
			},
		});

		return !!subscription;
	}

	async save(subscriptionData: Subscription) {
		const subscriptionCreate = await prisma.subscription.create({
			data: subscriptionData,
		});

		return subscriptionCreate;
	}

	async getAll() {
		const subscriptions = await prisma.subscription.findMany();

		return subscriptions;
	}
}
