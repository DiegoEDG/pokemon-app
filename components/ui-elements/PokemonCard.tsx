import React from 'react';
import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonMinimunData } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
	pokemon: PokemonMinimunData;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
	const router = useRouter();

	const onClick = () => {
		router.push(`/pokemon/${pokemon.name}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={2} key={pokemon.id}>
			<Card isHoverable isPressable variant="bordered" onClick={onClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={pokemon.img} width="100%" height={140} css={{ paddingTop: 20 }} />
					<Card.Footer>
						<Row justify="space-between">
							<Text transform="capitalize">{pokemon.name}</Text>
							<Text>{`# ${pokemon.id}`}</Text>
						</Row>
					</Card.Footer>
				</Card.Body>
			</Card>
		</Grid>
	);
};

export default PokemonCard;
