import React from 'react'
import './styles/cardsContainer.css'
import countryMock from '../mocks/countries_mock.json'
import {Card} from './Card'

const CardsContainer = () => {
  return (
    <>
      <div className='bg-city'>
        <div className='card-Container'>{ 
                
                  countryMock.map((country) => {
                    return (
                      <Card
                      name={country.name}
                      imageFlag ={country.imageFlag}
                      continent={country.continent}
                      capital={country.capital}
                      onClose={() => window.alert('Emulamos que se cierra la card')}
                    />
                  )
                })
             }
      </div>
    </div>
  </>
)
}
export default CardsContainer
                      

