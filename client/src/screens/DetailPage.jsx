import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import countryMock from '../mocks/country_mock.json' 
import './styles/detailPage.css'
 import { Link } from 'react-router-dom';




const DetailPage = () => {
 /*  const { id } = useParams();
  useEffect(() => {
    const selectedCountry = countries.find(c => c.id === id);
    setCountry(selectedCountry);
  }, [countries, id]);

  if (!country) {
    return <div>Loading...</div>;
  } */
  const country = countryMock[0]
  return (
    <div className="Detail-Container">
      <div className='Card-Info'>
      <img src={country.imageFlag[1]} alt="" />
      <div className="countryInfo">
        <h2 className='detail-h2'>{country.name}</h2>
        <h3 className='detail-h3'> Capital: {country.capital}</h3>
        <h4 className='detail-h4'>Continent: {country.continent[0]}</h4>
        <p className='p-Subregion'>Subregion: {country.subregion || 'Unknown'}</p>
        <p className='p-Area'>Area: {country.area || 'Unknown'}</p>
        <p className='p-Population'>Population: {country.population || 'Unknown'}</p>
        {country.activities.length > 0 ? (
          <>
            <h4 className='ActivitiesD'>Activities</h4>
            <ul className='ActivityD'>
              {country.activities.map((activity, i) => (
                <li key={i}>{activity.name}</li>
                ))}
            </ul>
          </>
        )
      : <>
        <h4 className="">Todavía no hay actividades asociadas a este país</h4>      
      </>
      }
        <Link to='/FormPage'>
        <button className='buttonInfoDS' onClick={() =>('./FormPage')}>Add Activity</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default DetailPage;
      
        

// ID (Código de tres letras),
// Nombre,
// Imagen de la bandera,
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.
      
      