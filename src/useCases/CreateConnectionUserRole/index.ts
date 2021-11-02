import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateConnectionUserRoleService } from './CreateConnectionUserRoleService';
import { CreateConnectionUserRoleController } from './CreateConnectionUserRoleController';

const createConnectionUserRoleFactory = () => {
	const rolesRepository = new RolesRepository();
	const createConnectionUserRole = new CreateConnectionUserRoleService(
		rolesRepository
	);
	const createConnectionUserRoleController =
		new CreateConnectionUserRoleController(createConnectionUserRole);

	return createConnectionUserRoleController;
};

export { createConnectionUserRoleFactory };
