import { prisma } from '@database/client';
import { Role } from '@entities/Role';
import { IRolesRepository } from '@repositories/IRolesRepository';

export class RolesRepository implements IRolesRepository {
	async exists(roleName: string) {
		const role = await prisma.role.findUnique({
			where: {
				name: roleName,
			},
		});

		return !!role;
	}

	async save(roleData: Role) {
		const createdRole = await prisma.role.create({
			data: roleData,
		});

		return createdRole;
	}

	async connectUserOnRole(userId: string, roleId: string) {
		const connect = await prisma.usersOnRoles.create({
			data: {
				roleId,
				userId,
			},
			include: {
				role: true,
				user: true,
			},
		});

		return connect;
	}
}
