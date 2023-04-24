import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByName } from '../redux/actions'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

  const handleOnSearch = (e) => {
    e.preventDefault()
    dispatch(searchByName(search))
  }

  return (
    <form>
      <input
        type="search"
        value={search}
        placeholder="Search Country By Name"
        onChange={handleOnChange}
      />
      <button type="submit" onClick={handleOnSearch}>
        Search
      </button>
    </form>
  )
}

export default SearchBar
