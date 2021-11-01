import { prisma } from '@database/client';
import { NextFunction, Request, Response } from 'express';

export function is(rolesRoutes: string[]) {
	return async (request: Request, response: Response, next: NextFunction) => {
		const { userId } = request;

		const roles = await prisma.usersOnRoles.findMany({
			where: {
				userId,
			},
			include: {
				role: true,
			},
		});

		if (!roles) {
			return response.status(400).json('User does not exists');
		}

		const roleExists = roles
			.map((role) => role.role.name)
			.some((role) => rolesRoutes.includes(role));

		if (!roleExists) {
			return response.status(401).end();
		}

		return next();
	};
}
