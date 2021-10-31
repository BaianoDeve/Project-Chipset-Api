import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';
import { CreateSubscriptionService } from './CreateSubscriptionService';
import { CreateSubscriptionController } from './CreateSubscriptionController';

const subscriptionsRepository = new SubscriptionsRepository();

const createSubscriptionService = new CreateSubscriptionService(
	subscriptionsRepository
);

const createSubscriptionController = new CreateSubscriptionController(
	createSubscriptionService
);

export { createSubscriptionService, createSubscriptionController };
