import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
	constructor(private createUserService: CreateUserService) {}

	async handle(request: Request, response: Response) {
		const { username, email, password, avatar_url } = request.body;

		const result = await this.createUserService.execute({
			email,
			password,
			username,
			avatar_url,
		});

		return response.json(result);
	}
}
