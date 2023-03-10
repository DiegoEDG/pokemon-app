import Image from 'next/image';
export interface PokemonResponse {
	count: number;
	next: string;
	previous: string;
	results: PokemonMinimunData[];
}

export interface PokemonMinimunData {
	id: number;
	name: string;
	url: string;
	img: string;
}
