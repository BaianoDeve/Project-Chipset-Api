import { UsersRepository } from '@repositories/implementations/PrismaUsersRepository';

export class GetUsersService {
	constructor(private usersRepository: UsersRepository) {}

	async execute(userId: string) {
		const users = await this.usersRepository.getAllUsers();
		return users;
	}
}
