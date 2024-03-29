import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { MainLayout } from '../../components/layouts';
import { PokemonCard } from '../../components/ui-elements';
import { PokemonMinimunData } from '../../interfaces';
import { getBasicPokemonData } from '../../utils';

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
	const pokemons = await getBasicPokemonData();
	return {
		props: {
			pokemons
		}
	};
};

export default Home;
