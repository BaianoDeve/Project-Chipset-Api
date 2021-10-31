import { Request, Response } from 'express';
import { SessionService } from './SessionService';

export class SessionController {
	constructor(private sessionService: SessionService) {}

	async handle(request: Request, response: Response) {
		const { username, password } = request.body;

		const result = await this.sessionService.execute({ username, password });

		return response.json(result);
	}
}
