import { User } from '@entities/User';

export interface IUsersRepository {
	findByUsername(username: string): Promise<User>;
	saveUser(data: User): Promise<User>;
	getAllUsers(): Promise<User[]>;
}
