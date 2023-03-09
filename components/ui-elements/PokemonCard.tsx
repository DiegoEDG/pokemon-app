import React from 'react';
import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonData } from '../../interfaces';

interface Props {
	pokemon: PokemonData;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
			<Card isHoverable>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={pokemon.img} width="100%" height={140} />
					<Card.Footer>
						<Row justify="space-between">
							<Text transform="capitalize">{pokemon.name}</Text>
							<Text>{pokemon.id}</Text>
						</Row>
					</Card.Footer>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default PokemonCard;
