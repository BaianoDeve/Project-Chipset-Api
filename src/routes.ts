import Router, { Request, Response } from 'express';
import { createUserController } from '@useCases/CreateUser';
import { getUsersController } from '@useCases/GetUsers';

const router = Router();

router.get('/all_users', (request: Request, response: Response) => {
	return getUsersController.handle(request, response);
});

router.post('/create_user', (request: Request, response: Response) => {
	return createUserController.handle(request, response);
});

export { router };
