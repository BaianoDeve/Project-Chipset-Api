import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { GetUsersService } from './GetUsersService';
import { GetUsersController } from './GetUsersController';

const getAllUsersFactory = () => {
	const usersRepository = new UsersRepository();
	const getAllUsers = new GetUsersService(usersRepository);
	const getUsersController = new GetUsersController(getAllUsers);

	return getUsersController;
};

export { getAllUsersFactory };
