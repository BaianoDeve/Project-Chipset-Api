import { User } from '@entities/User';

export interface IUsersRepository {
	exists(username: string): Promise<boolean>;
	save(data: User): Promise<User>;
	getAllUsers(): Promise<User[]>;
}
