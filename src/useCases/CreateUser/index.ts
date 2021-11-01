import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { HashProvider } from '@providers/implementations/BcryptHashProvider';
import { CreateUserService } from './CreateUserService';
import { CreateUserController } from './CreateUserController';

const createUserFactory = () => {
	const usersRepository = new UsersRepository();
	const hashProvider = new HashProvider(8);

	const createUser = new CreateUserService(usersRepository, hashProvider);
	const createUserController = new CreateUserController(createUser);

	return createUserController;
};

export { createUserFactory };
