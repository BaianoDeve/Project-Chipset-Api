import Router, { Request, Response } from 'express';

import { ensuredAuthenticated } from '@middlewares/ensuredAuthenticated';
import { is } from '@middlewares/permissions';

import { createUserController } from '@useCases/CreateUser';
import { getUsersController } from '@useCases/GetUsers';
import { sessionController } from '@useCases/Session';
import { createRoleController } from '@useCases/CreateRole';
import { createConnectionUserRoleController } from '@useCases/CreateConnectionUserRole';
import { createSubscriptionController } from '@useCases/CreateSubscription';
import { getSubscriptionController } from '@useCases/GetSubscriptions';

const router = Router();

/*
 * Users Routes
 */

router.post('/create_users', (request: Request, response: Response) =>
	createUserController.handle(request, response)
);

router.post('/auth_users', (request: Request, response: Response) =>
	sessionController.handle(request, response)
);

router.get(
	'/all_users',
	ensuredAuthenticated(),
	(request: Request, response: Response) =>
		getUsersController.handle(request, response)
);

/*
 * Roles Routes
 */

router.post(
	'/create_roles',
	is(['admin']),
	ensuredAuthenticated(),
	(request: Request, response: Response) =>
		createRoleController.handle(request, response)
);

router.post(
	'/users_roles',
	is(['admin']),
	ensuredAuthenticated(),
	async (request: Request, response: Response) =>
		createConnectionUserRoleController.handle(request, response)
);

/*
 * Subscriptions Routes
 */

router.post(
	'/create_subcription',
	async (request: Request, response: Response) =>
		createSubscriptionController.handle(request, response)
);

router.get(
	'/all_subcription',
	is(['admin']),
	ensuredAuthenticated(),
	async (request: Request, response: Response) =>
		getSubscriptionController.handle(request, response)
);

export { router };
