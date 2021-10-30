import { Request, Response } from 'express';
import { GetUsersService } from './GetUsersService';

export class GetUsersController {
	constructor(private getUsersService: GetUsersService) {}

	async handle(request: Request, response: Response) {
		const users = await this.getUsersService.execute();

		return response.json(users);
	}
}
