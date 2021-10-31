import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateConnectionUserRoleRequestDTO } from './CreateConnectionUserRoleDTO';

export class CreateConnectionUserRoleService {
	constructor(private rolesRepository: RolesRepository) {}

	async execute({ userId, roleId }: CreateConnectionUserRoleRequestDTO) {
		const conectRole = await this.rolesRepository.connectUserOnRole(
			userId,
			roleId
		);

		return conectRole;
	}
}
