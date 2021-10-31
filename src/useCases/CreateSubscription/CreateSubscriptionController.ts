import { Request, Response } from 'express';
import { CreateSubscriptionService } from './CreateSubscriptionService';

export class CreateSubscriptionController {
	constructor(private createSubscriptionService: CreateSubscriptionService) {}

	async handle(request: Request, response: Response) {
		const { email, equipament, name, phone, school, service, system } =
			request.body;

		const result = await this.createSubscriptionService.execute({
			email,
			equipament,
			name,
			phone,
			school,
			service,
			system,
		});

		return response.json(result);
	}
}
