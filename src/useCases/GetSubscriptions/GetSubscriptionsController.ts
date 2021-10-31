import { Request, Response } from 'express';
import { GetSubscriptionsService } from './GetSubscriptionsService';

export class GetSubscriptionsController {
	constructor(private getSubscriptionsService: GetSubscriptionsService) {}

	async handle(request: Request, response: Response) {
		const result = await this.getSubscriptionsService.execute();

		return response.json(result);
	}
}
