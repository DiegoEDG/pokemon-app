import { PokemonFullData, PokemonMinimunData } from '../interfaces';

const toggleFavorite = (isFavorite: boolean, pokemon: PokemonFullData) => {
	if (!isFavorite) {
		const pokemonsInStorage: PokemonMinimunData[] = JSON.parse(localStorage.getItem('favorites') || '[]');
		pokemonsInStorage.push({
			id: pokemon.id,
			name: pokemon.name,
			img: pokemon.sprites.other?.dream_world.front_default!,
			url: `/pokemon/${pokemon.name}`
		});
		localStorage.setItem('favorites', JSON.stringify(pokemonsInStorage));
		return { pokemonsInStorage, isFavorite: true };
	} else {
		const pokemonsInStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
		const filteredPokemons = pokemonsInStorage.filter(
			(pokemonInStorage: PokemonMinimunData) => pokemonInStorage.id !== pokemon.id
		);
		localStorage.setItem('favorites', JSON.stringify(filteredPokemons));
		return { filteredPokemons, isFavorite: false };
	}
};
export default toggleFavorite;
