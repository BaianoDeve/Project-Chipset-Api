import { User } from '@entities/User';
import { IHashProvider } from '@providers/IHashProvider';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { CreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserService {
	constructor(
		private usersRepository: IUsersRepository,
		private hashProvider: IHashProvider
	) {}

	async execute({
		username,
		email,
		password,
		avatar_url,
	}: CreateUserRequestDTO) {
		const userAlreadyExists = await this.usersRepository.findByUsername(
			username
		);

		if (userAlreadyExists) {
			throw new Error('User already exists!');
		}

		const passwordHash = await this.hashProvider.generationHash(password);

		const userCreate = User.create({
			username,
			email,
			avatar_url,
			password: passwordHash,
		});

		const user = await this.usersRepository.saveUser(userCreate);

		return user;
	}
}
