import { IHashProvider } from '@providers/IHashProvider';
import bcrypt from 'bcryptjs';

export class HashProvider implements IHashProvider {
	constructor(private readonly salt: number) {}

	async generationHash(value: string) {
		const hash = await bcrypt.hash(value, this.salt);
		return hash;
	}

	async compareHash(value: string, hash: string) {
		const isValid = await bcrypt.compare(value, hash);
		return isValid;
	}
}
