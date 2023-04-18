import { React } from 'react'
import './styles/card.css'
import './styles/cardsContainer.css'

export const Card = ({name, imageFlag, continent, capital}) => {
  return (
    <>
    <div className='Card'>
         <img className='imageFlag' src={imageFlag[1]} alt="" />
      <div className="countryInfo">
         <h2 className='h2'>{name}</h2>
          <h3 className='h3'>{capital}</h3>
          <h4 className='h4'>{continent} </h4>
      </div>
    </div>
    </>
  )
}
         
