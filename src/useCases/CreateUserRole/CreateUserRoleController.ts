import { Request, Response } from 'express';
import { CreateUserRoleService } from './CreateUserRoleService';

export class CreateUserRoleController {
	constructor(private createUserRoleService: CreateUserRoleService) {}

	async handle(request: Request, response: Response) {
		const { userId, roleId } = request.body;

		const result = await this.createUserRoleService.execute({ roleId, userId });

		return response.json(result);
	}
}
