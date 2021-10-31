import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { HashProvider } from '@providers/implementations/BcryptHashProvider';
import { CreateUserService } from './CreateUserService';
import { CreateUserController } from './CreateUserController';

const usersRepository = new UsersRepository();
const hashProvider = new HashProvider(8);

const createUserService = new CreateUserService(usersRepository, hashProvider);

const createUserController = new CreateUserController(createUserService);

export { createUserService, createUserController };
