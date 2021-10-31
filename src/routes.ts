import Router, { Request, Response } from 'express';

import { ensuredAuthenticated } from '@middlewares/ensuredAuthenticated';
import { is } from '@middlewares/permissions';

import { createUserController } from '@useCases/CreateUser';
import { getUsersController } from '@useCases/GetUsers';
import { sessionController } from '@useCases/Session';
import { createRoleController } from '@useCases/CreateRole';
import { createConnectionUserRoleController } from '@useCases/CreateConnectionUserRole';
import { createSubscriptionController } from '@useCases/CreateSubscription';

const router = Router();

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

router.post(
	'/create_subcription',
	async (request: Request, response: Response) =>
		createSubscriptionController.handle(request, response)
);

export { router };
