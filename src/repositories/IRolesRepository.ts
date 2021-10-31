import { Prisma, UsersOnRoles, User } from '@prisma/client';

export type Role = Prisma.RoleCreateInput;

export type UsersRoles = UsersOnRoles & {
	user: User;
	role: Role;
};

export interface IRolesRepository {
	findByName(name: string): Promise<Role>;
	saveRole(data: Role): Promise<Role>;
	connectUserOnRole(userId: string, roleId: string): Promise<UsersRoles>;
}
