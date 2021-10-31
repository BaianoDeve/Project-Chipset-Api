import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';
import { GetSubscriptionsService } from './GetSubscriptionsService';
import { GetSubscriptionsController } from './GetSubscriptionsController';

const subscriptionsRepository = new SubscriptionsRepository();

const getSubscriptionService = new GetSubscriptionsService(
	subscriptionsRepository
);

const getSubscriptionController = new GetSubscriptionsController(
	getSubscriptionService
);

export { getSubscriptionService, getSubscriptionController };
