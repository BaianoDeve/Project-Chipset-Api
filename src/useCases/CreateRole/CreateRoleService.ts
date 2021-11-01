import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateRoleRequestDTO } from './CreateRoleDTO';

export class CreateRoleService {
	constructor(private rolesRepository: RolesRepository) {}

	async execute({ name, description, userId }: CreateRoleRequestDTO) {
		const roleAlreadyExists = await this.rolesRepository.exists(name);

		if (roleAlreadyExists) {
			throw new Error('Role already exists!');
		}

		const role = await this.rolesRepository.saveRole({ name, description });

		await this.rolesRepository.connectUserOnRole(userId, role.id);

		return role;
	}
}
