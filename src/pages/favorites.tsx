import React, { FC, useState, useEffect } from 'react';
import { Card, Grid, Image } from '@nextui-org/react';
import { MainLayout } from '../../components/layouts';
import { PokemonMinimunData } from '../../interfaces';
import { PokemonCard } from '../../components/ui-elements';

const Favorites: FC = () => {
	const [pokemons, setPokemons] = useState<PokemonMinimunData[]>([]);

	useEffect(() => {
		const pokemonsInStorage: PokemonMinimunData[] = JSON.parse(localStorage.getItem('favorites') || '[]');
		setPokemons(pokemonsInStorage);
	}, []);

	return (
		<MainLayout title="Favorites">
			<Grid.Container justify="flex-start" gap={2}>
				{pokemons.map((pokemon) => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</MainLayout>
	);
};

export default Favorites;
