import { FC } from 'react'
import { MdSearch } from 'react-icons/md'

import { useSearch } from '@/screens/Home/Header/SearchBar/useSearch'

import UserItem from '@/components/ui/user-item/UserItem'

import styles from './SearchBar.module.scss'

const SearchBar: FC = () => {
	const { searchTerm, handleSearch, data, isSuccess } = useSearch()

	return (
		<div className={styles.wrapper}>
			<label className={styles.bar}>
				<MdSearch style={{ marginRight: 5 }} />
				<input
					placeholder={'Поиск'}
					className={styles.input}
					value={searchTerm}
					onChange={handleSearch}
				/>
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						<div>
							{data?.map(item => (
								<UserItem user={item} key={item.id} />
							))}
						</div>
					) : (
						<div>Пользователи не найдены :(</div>
					)}
				</div>
			)}
		</div>
	)
}

export default SearchBar
