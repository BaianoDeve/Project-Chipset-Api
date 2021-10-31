import { Request, Response } from 'express';
import { CreateConnectionUserRoleService } from './CreateConnectionUserRoleService';

export class CreateConnectionUserRoleController {
	constructor(
		private createConnectionUserRoleService: CreateConnectionUserRoleService
	) {}

	async handle(request: Request, response: Response) {
		const { userId, roleId } = request.body;

		const result = await this.createConnectionUserRoleService.execute({
			roleId,
			userId,
		});

		return response.json(result);
	}
}
