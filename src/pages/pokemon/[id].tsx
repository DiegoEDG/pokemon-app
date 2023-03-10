import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PokemonFullData } from '../../../interfaces';
import { pokeApi } from '../../../api';
import { MainLayout } from '../../../components/layouts';

interface Props {
	pokemon: PokemonFullData;
}

const PokemonPage: FC<Props> = ({ pokemon }) => {
	return (
		<MainLayout>
			<h1>
				{pokemon.id} - {pokemon.name}
			</h1>
		</MainLayout>
	);
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemonPagesId = [...Array(151)].map((ele, idx) => `${idx + 1}`);

	return {
		paths: pokemonPagesId.map((id) => ({ params: { id } })),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<PokemonFullData>(`/pokemon/${id}`);

	return {
		props: {
			pokemon: data
		}
	};
};
