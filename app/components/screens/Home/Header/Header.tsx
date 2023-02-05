import { FC } from 'react'

import styles from './Header.module.scss'
import Logo from './Logo'
import SearchBar from './SearchBar/SearchBar'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<SearchBar />
			</div>
		</div>
	)
}

export default Header
