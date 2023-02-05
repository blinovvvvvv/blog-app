import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Sidebar />
				{children}
			</div>
		</div>
	)
}

export default Layout
