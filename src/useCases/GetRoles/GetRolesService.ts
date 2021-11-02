import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';

export class GetRolesService {
	constructor(private rolesRepository: RolesRepository) {}

	async execute() {
		const roles = await this.rolesRepository.getAll();

		return roles;
	}
}
