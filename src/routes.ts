import Router from 'express';

import { ensuredAuthenticated } from '@middlewares/ensuredAuthenticated';
import { is } from '@middlewares/permissions';

import { createUserFactory } from '@useCases/CreateUser';
import { getAllUsersFactory } from '@useCases/GetUsers';
import { sessionFactory } from '@useCases/Session';
import { createRoleFactory } from '@useCases/CreateRole';
import { getAllRolesFactory } from '@useCases/GetRoles';
import { createConnectionUserRoleFactory } from '@useCases/CreateConnectionUserRole';
import { createSubscriptionFactory } from '@useCases/CreateSubscription';
import { getAllSubscriptionsFactory } from '@useCases/GetSubscriptions';

const router = Router();

/*
 * Users Routes
 */

router.post('/create_users', (request, response) =>
	createUserFactory().handle(request, response)
);

router.post('/auth_users', (request, response) =>
	sessionFactory().handle(request, response)
);

router.get('/all_users', ensuredAuthenticated(), (request, response) =>
	getAllUsersFactory().handle(request, response)
);

/*
 * Roles Routes
 */

router.post(
	'/create_roles',
	is(['admin']),
	ensuredAuthenticated(),
	(request, response) => createRoleFactory().handle(request, response)
);

router.post(
	'/users_roles',
	is(['admin']),
	ensuredAuthenticated(),
	(request, response) =>
		createConnectionUserRoleFactory().handle(request, response)
);

router.post(
	'/all_roles',
	is(['admin']),
	ensuredAuthenticated(),
	(request, response) => getAllRolesFactory().handle(request, response)
);

/*
 * Subscriptions Routes
 */

router.post('/create_subcription', (request, response) =>
	createSubscriptionFactory().handle(request, response)
);

router.get(
	'/all_subcriptions',
	is(['admin']),
	ensuredAuthenticated(),
	(request, response) => getAllSubscriptionsFactory().handle(request, response)
);

export { router };
