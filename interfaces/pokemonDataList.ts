import Image from 'next/image';
export interface PokemonResponse {
	count: number;
	next: string;
	previous: string;
	results: PokemonData[];
}

export interface PokemonData {
	id: number;
	name: string;
	url: string;
	img: string;
}
