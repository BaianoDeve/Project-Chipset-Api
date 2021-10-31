import { Prisma } from '@prisma/client';

export type User = Prisma.UserCreateInput;

export interface IUsersRepository {
	findByUsername(username: string): Promise<User>;
	saveUser(data: User): Promise<User>;
	getAllUsers(): Promise<User[]>;
}
