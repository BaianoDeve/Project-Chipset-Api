import { Subscription } from '@entities/Subscriptions';

export interface ISubscriptionsRepository {
	exists(email: string): Promise<boolean>;
	save(data: Subscription): Promise<Subscription>;
	getAll(): Promise<Subscription[]>;
}
