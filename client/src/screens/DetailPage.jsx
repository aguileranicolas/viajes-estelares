import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cleanCountry, getCountryById } from '../redux/actions'
import { useSelector } from 'react-redux'
//import countryMock from '../mockups/country_mock.json'
import './styles/detailPage.css'

const DetailPage = () => {
  const { idPais } = useParams()
  const dispatch = useDispatch()
  const country = useSelector((state) => state.countryById)

  useEffect(() => {
    dispatch(getCountryById(idPais))

    return () => {
      dispatch(cleanCountry())
    }
  }, [dispatch, idPais])

  //const country = countryMock[0]
  //console.log(country)

  return (
    <>
      <div className="Detail-Container">
        <div className="Card-Info">
          <img src={country?.imageFlag[1]} alt="" />
          <div className="countryInfo">
            <h2 className="detail-h2">{country.name}</h2>
            <h3 className="detail-h3"> Capital: {country.capital}</h3>
            <h4 className="detail-h4">Continent: {country.continent[0]}</h4>
            <p className="p-Subregion">
              Subregion: {country.subregion || 'Unknown'}
            </p>
            <p className="p-Area">Area: {country.area || 'Unknown'}</p>
            <p className="p-Population">
              Population: {country.population || 'Unknown'}
            </p>
            {country.activities.length > 0 ? (
              <>
                <h4 className="ActivitiesD">Activities</h4>
                <ul className="ActivityD">
                  {country.activities.map((activity, i) => (
                    <li key={i}>{activity.name}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h4 className="">
                  There are no activities associated with this country yet
                </h4>
              </>
            )}
            <Link to="/FormPage">
              <button className="buttonInfoDS" onClick={() => './FormPage'}>
                Add Activity
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage
