import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui-elements/Navbar';

interface Props extends PropsWithChildren {
	title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="author" content="Diego Gutiérrez" />
				<meta name="description" content="Información sobre el pokemón XXXXX" />
				<meta name="keywords" content="XXXXX, pokemón, pokedex" />
			</Head>
			<Navbar />
			<main>{children}</main>
		</>
	);
};
