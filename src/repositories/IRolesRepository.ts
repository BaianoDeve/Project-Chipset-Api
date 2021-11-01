import { Role } from '@entities/Role';
import { User } from '@entities/User';

export type UsersRoles = {
	user: User;
	role: Role;
};

export interface IRolesRepository {
	exists(name: string): Promise<boolean>;
	saveRole(data: Role): Promise<Role>;
	connectUserOnRole(userId: string, roleId: string): Promise<UsersRoles>;
}
