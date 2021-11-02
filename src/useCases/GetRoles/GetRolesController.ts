import { Request, Response } from 'express';
import { GetRolesService } from './GetRolesService';

export class GetRolesController {
	constructor(private getRolesService: GetRolesService) {}

	async handle(request: Request, response: Response) {
		const result = await this.getRolesService.execute();

		return response.json(result);
	}
}
