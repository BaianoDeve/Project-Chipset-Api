import { prisma } from '@/prisma';
import { IRolesRepository, Role } from '@repositories/IRolesRepository';

export class RolesRepository implements IRolesRepository {
	async findByName(roleName: string) {
		const role = await prisma.role.findFirst({
			where: {
				name: roleName,
			},
		});

		return role;
	}

	async saveRole(roleData: Role) {
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