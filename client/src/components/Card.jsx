import { React } from 'react'
import './styles/card.css'
import './styles/cardsContainer.css'
import { useNavigate } from 'react-router-dom'

export const Card = ({ name, imageFlag, continent, id }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="Card">
        <img className="imageFlag" src={imageFlag[1]} alt="" />
        <div className="countryInfo">
          <h2 className="h2">{name}</h2>
          <h4 className="h4">{continent} </h4>
        </div>
        <button
          className="buttonInfo"
          onClick={() => navigate(`/countries/${id}`)}
        >
          For more information
        </button>
      </div>
    </>
  )
}
