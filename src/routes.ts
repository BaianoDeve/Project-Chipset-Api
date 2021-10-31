import Router, { Request, Response } from 'express';

import { ensuredAuthenticated } from '@middlewares/ensuredAuthenticated';

import { createUserController } from '@useCases/CreateUser';
import { getUsersController } from '@useCases/GetUsers';
import { sessionController } from '@useCases/Session';

const router = Router();

router.get(
	'/all_users',
	ensuredAuthenticated(),
	(request: Request, response: Response) => {
		return getUsersController.handle(request, response);
	}
);

router.post('/create_users', (request: Request, response: Response) => {
	return createUserController.handle(request, response);
});

router.post('/auth_users', (request: Request, response: Response) => {
	return sessionController.handle(request, response);
});

export { router };
