import { HashProvider } from '@providers/implementations/BcryptHashProvider';
import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { sign } from 'jsonwebtoken';
import { SessionRequestDTO } from './SessionDTO';

export class SessionService {
	constructor(
		private usersRepository: UsersRepository,
		private hashProvider: HashProvider
	) {}

	async execute({ username, password }: SessionRequestDTO) {
		const user = await this.usersRepository.findByUsername(username);

		if (!user) {
			throw new Error('User does not exists!');
		}

		const passwordMatch = await this.hashProvider.compareHash(
			password,
			user.password
		);

		if (!passwordMatch) {
			return new Error('User or Password incorrect');
		}

		const token = sign({}, process.env.SECRET_JWT, {
			subject: user.id,
			expiresIn: '2d',
		});

		return { token };
	}
}
