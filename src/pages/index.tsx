import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { pokeApi } from '../../api';
import { MainLayout } from '../../components/layouts';
import { PokemonCard } from '../../components/ui-elements';
import { PokemonMinimunData, PokemonResponse } from '../../interfaces';

interface Props {
	pokemons: PokemonMinimunData[];
}

const Home: FC<Props> = ({ pokemons }) => {
	return (
		<MainLayout title="Pokemón App">
			<Grid.Container justify="flex-start" gap={2}>
				{pokemons.map((pokemon) => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

	const pokemons: PokemonMinimunData[] = data.results.map((pokemon, i) => ({
		...pokemon,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
	}));

	return {
		props: {
			pokemons
		}
	};
};

export default Home;
