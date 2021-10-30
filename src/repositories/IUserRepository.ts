import { Prisma } from '@prisma/client';

export type User = Prisma.UserCreateInput;

export interface IUsersRepository {
	findByUsername(username: string): Promise<User>;
	saveUser(userData: User): Promise<User>;
	getAllUsers(): Promise<User[]>;
}
