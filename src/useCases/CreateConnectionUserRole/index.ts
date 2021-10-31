import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateConnectionUserRoleService } from './CreateConnectionUserRoleService';
import { CreateConnectionUserRoleController } from './CreateConnectionUserRoleController';

const rolesRepository = new RolesRepository();

const createConnectionUserRoleService = new CreateConnectionUserRoleService(
	rolesRepository
);

const createConnectionUserRoleController =
	new CreateConnectionUserRoleController(createConnectionUserRoleService);

export { createConnectionUserRoleService, createConnectionUserRoleController };
