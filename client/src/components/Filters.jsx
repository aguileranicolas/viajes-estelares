import React from 'react'
import {
  filterCountriesByContinent,
  sortByName,
  sortByPopulation,
} from '../redux/actions'
import { useDispatch } from 'react-redux'

const Filters = () => {
  const dispatch = useDispatch()
  const allContinents = [
    'All',
    'Antarctica',
    'South America',
    'Asia',
    'Africa',
    'Europe',
    'North America',
    'Oceania',
  ]

  const handleFilterContinent = (e) => {
    dispatch(filterCountriesByContinent(e.target.value))
  }

  const handleOrderByName = (e) => {
    dispatch(sortByName(e.target.value))
  }

  const handleOrderByPopulation = (e) => {
    dispatch(sortByPopulation(e.target.value))
    console.log(e.target.value)
  }

  return (
    <>
      <label>Sort By Name: </label>
      <button value="ASC" onClick={(e) => handleOrderByName(e)}>
        Asc
      </button>
      <button value="DESC" onClick={(e) => handleOrderByName(e)}>
        Desc
      </button>

      <select onChange={(e) => handleOrderByPopulation(e)}>
        <option value="" disabled>
          Sort By Population
        </option>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>

      <span className="">Filtrar Por Continente</span>
      <select onChange={(e) => handleFilterContinent(e)}>
        <option value="continent" disabled>
          Continente
        </option>
        {allContinents.length > 0 &&
          allContinents?.map((continent) => (
            <>
              <option value={continent}>{continent}</option>
            </>
          ))}
      </select>
    </>
  )
}

export default Filters
