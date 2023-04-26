import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cleanCountry, getCountryById } from '../redux/actions'
import { useSelector } from 'react-redux'
import '../style.css'

const DetailPage = () => {
	const { idPais } = useParams()
	const dispatch = useDispatch()
	const country = useSelector(state => state.countryById)

	useEffect(() => {
		dispatch(getCountryById(idPais))

		return () => {
			dispatch(cleanCountry())
		}
	}, [dispatch, idPais])

	return (
		<>
			<div className='backgroundImageDetail'>
				<div className='container'>
					<div>
						<div className='cardDetail'>
							<div></div>
							<img
								className='imageFlag'
								style={{ width: '400px', height: '350px' }}
								src={country?.imageFlag[1]}
								alt=''
							/>
							<div className=''>
								<h2 className='detailTex'>{country.name}</h2>
								<h3 className='detailTex'> Capital: {country.capital}</h3>
								<h4 className='detailTex'>Continent: {country.continent[0]}</h4>
								<p className='detailTex'>
									Subregion: {country.subregion || 'Unknown'}
								</p>
								<p className='detailTex'>Area: {country.area || 'Unknown'}</p>
								<p className='detailTex'>
									Population: {country.population || 'Unknown'}
								</p>
								{country.activities.length > 0 ? (
									<>
										<h4 className='detailTex'>Activities</h4>
										<ul className='detailTex'>
											{country.activities.map((activity, i) => (
												<li key={i}>{activity.name}</li>
											))}
										</ul>
									</>
								) : (
									<>
										<h4 className='detailTex'>
											There are no activities associated with this country yet
										</h4>
									</>
								)}
								<Link to='/FormPage'>
									<button
										className='buttonInfoDetail'
										onClick={() => './FormPage'}
									>
										Add Activity
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DetailPage
