import { HashProvider } from '@providers/implementations/BcryptHashProvider';
import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { SessionService } from './SessionService';
import { SessionController } from './SessionController';

const usersRepository = new UsersRepository();
const hashProvider = new HashProvider(8);

const sessionService = new SessionService(usersRepository, hashProvider);

const sessionController = new SessionController(sessionService);

export { sessionService, sessionController };
