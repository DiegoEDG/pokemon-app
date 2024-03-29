import React, { FC, useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { PokemonFullData, PokemonMinimunData } from '../../../interfaces';
import { getFullPokemonData, pokeApi } from '../../../api';
import { MainLayout } from '../../../components/layouts';
import { toggleFavorite } from '../../../utils';

interface Props {
	pokemon: PokemonFullData;
}

const PokemonPage: FC<Props> = ({ pokemon }) => {
	const [isFavorite, setIsFavorite] = useState<boolean>();

	useEffect(() => {
		const pokemonsInStorage: PokemonMinimunData[] = JSON.parse(localStorage.getItem('favorites') || '[]');
		setIsFavorite(findPokemonsInStorage(pokemon, pokemonsInStorage));
	}, []);

	const findPokemonsInStorage = (pokemon: PokemonFullData, pokemonsInStorage: PokemonMinimunData[]) => {
		const pokemonsId = pokemonsInStorage.map((pokemon) => pokemon.id);
		return pokemonsId.includes(pokemon.id);
	};

	const pokemonNameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		toggleFavorite(isFavorite!, pokemon);
	};
	return (
		<MainLayout title={`${pokemonNameCapitalized} detail`}>
			<Grid.Container css={{ display: 'flex', flexDirection: 'row' }} gap={2}>
				<Grid xs={12} md={4}>
					<Card>
						<Card.Body>
							<Image
								src={pokemon.sprites.other?.dream_world.front_default || '/placeholder.png'}
								alt={pokemon.name}
								height={300}
								width={300}
								style={{ margin: 'auto' }}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} md={8}>
					<Card css={{ paddingTop: '10px' }}>
						<Card.Header css={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text h3 transform="capitalize">
								{pokemon.id} - {pokemon.name}
							</Text>
							<Button
								onPress={handleFavorite}
								auto
								color="gradient"
								rounded
								ghost={!isFavorite}
								css={{ marginBottom: '10px' }}
							>
								{isFavorite ? 'Favorite' : 'Add to favorites'}
							</Button>
						</Card.Header>
						<Text h3 css={{ marginLeft: '18px' }}>
							Sprites
						</Text>
						<Card.Body>
							<Container display="flex" direction="row" justify="space-between">
								<Image
									src={pokemon.sprites.front_default}
									alt={'front default sprite'}
									width={100}
									height={100}
								></Image>
								<Image src={pokemon.sprites.back_default} alt={'back default sprite'} width={100} height={100}></Image>
								<Image src={pokemon.sprites.front_shiny} alt={'front shiny sprite'} width={100} height={100}></Image>
								<Image src={pokemon.sprites.back_shiny} alt={'back shiny sprite'} width={100} height={100}></Image>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</MainLayout>
	);
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const data = await getFullPokemonData();
	const pokemonNames = data.map((pokemon) => ({ params: { name: pokemon.name } }));

	return {
		paths: pokemonNames,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };
	const { data } = await pokeApi.get<PokemonFullData>(`/pokemon/${name}`);
	const necessaryPokemonData = {
		id: data.id,
		name: data.name,
		sprites: data.sprites
	};

	return {
		props: {
			pokemon: necessaryPokemonData
		}
	};
};
