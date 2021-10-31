import { RolesRepository } from '@repositories/implementations/PrismaRolesRepository';
import { CreateRoleService } from './CreateRoleService';
import { CreateRoleController } from './CreateRoleController';

const rolesRepository = new RolesRepository();

const createRoleService = new CreateRoleService(rolesRepository);

const createRoleController = new CreateRoleController(createRoleService);

export { createRoleService, createRoleController };
