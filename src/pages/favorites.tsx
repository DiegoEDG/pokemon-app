import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { PokemonMinimunData } from '../../interfaces/pokemonDataList';
import { Grid } from '@nextui-org/react';
import { MainLayout } from '../../components/layouts';
import { PokemonCard } from '../../components/ui-elements';
import { getFullPokemonData } from '../../api/pokeApi';
import { getBasicPokemonData } from '../../utils';

interface Props {
	pokemons: PokemonMinimunData[];
}

const Favorites: FC<Props> = ({ pokemons }) => {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
	const pokemons = await getBasicPokemonData();

	return {
		props: {
			pokemons
		}
	};
};

export default Favorites;
