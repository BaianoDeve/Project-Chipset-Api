import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateRoleService } from './CreateRoleService';
import { CreateRoleController } from './CreateRoleController';

const createRoleFactory = () => {
	const rolesRepository = new RolesRepository();
	const createRole = new CreateRoleService(rolesRepository);
	const createRoleController = new CreateRoleController(createRole);

	return createRoleController;
};

export { createRoleFactory };
