import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';

export class GetUsersService {
	constructor(private usersRepository: UsersRepository) {}

	async execute() {
		const users = await this.usersRepository.getAll();
		return users;
	}
}
