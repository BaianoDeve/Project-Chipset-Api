import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { GetRolesService } from './GetRolesService';
import { GetRolesController } from './GetRolesController';

const getAllRolesFactory = () => {
	const rolesRepository = new RolesRepository();
	const getAllRoles = new GetRolesService(rolesRepository);
	const getAllRoleController = new GetRolesController(getAllRoles);

	return getAllRoleController;
};

export { getAllRolesFactory };
