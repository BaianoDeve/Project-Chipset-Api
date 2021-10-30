export interface IHashProvider {
	generationHash(value: string): Promise<string>;
	compareHash(value: string, hash: string): Promise<boolean>;
}
