import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateUserRoleService } from './CreateUserRoleService';
import { CreateUserRoleController } from './CreateUserRoleController';

const rolesRepository = new RolesRepository();

const createUserRoleService = new CreateUserRoleService(rolesRepository);

const createUserRoleController = new CreateUserRoleController(
	createUserRoleService
);

export { createUserRoleService, createUserRoleController };
