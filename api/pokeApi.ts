import axios from 'axios';
import { PokemonResponse } from '../interfaces';

export const pokeApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2'
});

export const getFullPokemonData = async () => {
	const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
	return data;
};
