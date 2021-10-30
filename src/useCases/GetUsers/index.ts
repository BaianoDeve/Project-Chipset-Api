import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { GetUsersService } from './GetUsersService';
import { GetUsersController } from './GetUsersController';

const usersRepository = new UsersRepository();

const getUsersService = new GetUsersService(usersRepository);

const getUsersController = new GetUsersController(getUsersService);

export { getUsersService, getUsersController };
