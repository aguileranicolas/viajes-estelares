import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByName } from '../redux/actions'
import '../style.css'

const SearchBar = () => {
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')

	const handleOnChange = e => {
		setSearch(e.target.value)
	}

	const handleOnSearch = e => {
		e.preventDefault()
		dispatch(searchByName(search))
	}

	return (
		<form className='searchBarContainer'>
			<input
				className='searchBar heading6'
				type='search'
				value={search}
				placeholder='Search Country By Name'
				onChange={handleOnChange}
			/>
			<button
				className='searchButton heading6'
				type='submit'
				onClick={handleOnSearch}
			>
				Search
			</button>
		</form>
	)
}

export default SearchBar
