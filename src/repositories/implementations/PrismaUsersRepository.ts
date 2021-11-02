import { prisma } from '@database/client';
import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';

export class UsersRepository implements IUsersRepository {
	async exists(username: string) {
		const user = await prisma.user.findFirst({
			where: {
				username,
			},
		});

		return !!user;
	}

	async save(userData: User) {
		const userCreate = await prisma.user.create({
			data: userData,
		});

		return userCreate;
	}

	async getAll() {
		const users = await prisma.user.findMany();

		return users;
	}

	async findByUsername(username: string) {
		const user = await prisma.user.findFirst({
			where: {
				username,
			},
		});

		return user;
	}
}
