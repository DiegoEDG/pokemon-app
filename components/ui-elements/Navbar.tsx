import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div className={styles.navbar} style={{ backgroundColor: theme?.colors.gray50.value }}>
			<Link href="/" className={styles.link}>
				<Image
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
					alt="Logo"
					width={96}
					height={96}
				/>
				<Text h2>P</Text>
				<Text h3 className={styles.title}>
					okemón
				</Text>
			</Link>
			<Spacer css={{ flex: '1' }} />

			<Link href="/favorites" className={styles.link}>
				<Text className={styles.favoritos} h4>
					Favorites
				</Text>
			</Link>
		</div>
	);
};
