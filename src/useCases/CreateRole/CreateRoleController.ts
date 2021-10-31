import { Request, Response } from 'express';
import { CreateRoleService } from './CreateRoleService';

export class CreateRoleController {
	constructor(private createRoleService: CreateRoleService) {}

	async handle(request: Request, response: Response) {
		const { name, description } = request.body,
			{ userId } = request;

		const result = await this.createRoleService.execute({
			name,
			description,
			userId,
		});

		return response.json(result);
	}
}
