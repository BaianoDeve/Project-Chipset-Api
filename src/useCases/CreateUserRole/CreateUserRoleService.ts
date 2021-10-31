import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateUserRoleRequestDTO } from './CreateUserRoleDTO';

export class CreateUserRoleService {
	constructor(private rolesRepository: RolesRepository) {}

	async execute({ userId, roleId }: CreateUserRoleRequestDTO) {
		const conectRole = await this.rolesRepository.connectUserOnRole(
			userId,
			roleId
		);

		return conectRole;
	}
}
