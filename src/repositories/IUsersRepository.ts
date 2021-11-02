import { User } from '@entities/User';

export interface IUsersRepository {
	exists(username: string): Promise<boolean>;
	save(data: User): Promise<User>;
	findByUsername(username: string): Promise<User>;
	getAll(): Promise<User[]>;
}
