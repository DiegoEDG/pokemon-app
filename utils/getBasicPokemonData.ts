import { getFullPokemonData } from '../api';
import { PokemonMinimunData } from '../interfaces';

const getBasicPokemonData = async () => {
	const data = await getFullPokemonData();

	const pokemons: PokemonMinimunData[] = data.map((pokemon, i) => ({
		...pokemon,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
	}));

	return pokemons;
};

export default getBasicPokemonData;
