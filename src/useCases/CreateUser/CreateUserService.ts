import { IHashProvider } from '@providers/IHashProvider';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { CreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserService {
	constructor(
		private usersRepository: IUsersRepository,
		private hashProvider: IHashProvider
	) {}

	async execute(data: CreateUserRequestDTO) {
		const userAlreadyExists = await this.usersRepository.findByUsername(
			data.username
		);

		if (userAlreadyExists) {
			throw new Error('User already exists!');
		}

		data.password = await this.hashProvider.generationHash(data.password);

		const user = await this.usersRepository.saveUser(data);

		return user;
	}
}
