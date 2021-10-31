import { Prisma } from '@prisma/client';

export type Subscription = Prisma.SubscriptionCreateInput;

export interface ISubscriptionsRepository {
	findByEmail(email: string): Promise<Subscription>;
	saveSubscription(data: Subscription): Promise<Subscription>;
	getAllSubscriptions(): Promise<Subscription[]>;
}
