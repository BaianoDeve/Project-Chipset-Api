import { SubscriptionsRepository } from '@repositories/implementations/PrismaSubscriptionsRepository';
import { GetSubscriptionsService } from './GetSubscriptionsService';
import { GetSubscriptionsController } from './GetSubscriptionsController';

const getAllSubscriptionsFactory = () => {
	const subscriptionsRepository = new SubscriptionsRepository();
	const getSubscriptions = new GetSubscriptionsService(subscriptionsRepository);
	const getSubscriptionsController = new GetSubscriptionsController(
		getSubscriptions
	);

	return getSubscriptionsController;
};
export { getAllSubscriptionsFactory };
