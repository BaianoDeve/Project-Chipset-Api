import { prisma } from '@database/client';
import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';

export class UsersRepository implements IUsersRepository {
	async findByUsername(username: string) {
		const user = await prisma.user.findFirst({
			where: {
				username,
			},
		});

		return user;
	}

	async saveUser(userData: User) {
		const userCreate = await prisma.user.create({
			data: userData,
		});

		return userCreate;
	}

	async getAllUsers() {
		const users = await prisma.user.findMany();

		return users;
	}
}
