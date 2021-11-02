import { Role } from '@entities/Role';
import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateRoleRequestDTO } from './CreateRoleDTO';

export class CreateRoleService {
	constructor(private rolesRepository: RolesRepository) {}

	async execute({ name, description, userId }: CreateRoleRequestDTO) {
		const roleAlreadyExists = await this.rolesRepository.exists(name);

		if (roleAlreadyExists) {
			throw new Error('Role already exists!');
		}

		const roleCreate = Role.create({ name, description });
		const role = await this.rolesRepository.save(roleCreate);

		await this.rolesRepository.connectUserOnRole(userId, role.id);

		return role;
	}
}
