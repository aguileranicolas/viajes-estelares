import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './styles/cardsContainer.css'
import { Card } from './Card'
import Paginate from './Paginate'

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage + countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className="bg-city">
        <Paginate
          countriesPerPage={countriesPerPage}
          allCountries={countries.length}
          paginate={paginate}
        />
        <div className="card-Container">
          {currentCountries?.map((country) => {
            return (
              <Card
                id={country.id}
                key={country.id}
                name={country.name}
                imageFlag={country.imageFlag}
                continent={country.continent}
                capital={country.capital}
                onClose={() => window.alert('Emulamos que se cierra la card')}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default CardsContainer
