import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';
import { CreateSubscriptionService } from './CreateSubscriptionService';
import { CreateSubscriptionController } from './CreateSubscriptionController';

const createSubscriptionFactory = () => {
	const subscriptionsRepository = new SubscriptionsRepository();
	const createSubscription = new CreateSubscriptionService(
		subscriptionsRepository
	);
	const createSubscriptionController = new CreateSubscriptionController(
		createSubscription
	);

	return createSubscriptionController;
};

export { createSubscriptionFactory };
