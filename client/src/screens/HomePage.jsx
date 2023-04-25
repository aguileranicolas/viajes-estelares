import React, { useEffect } from 'react'
import CardsContainer from '../components/CardsContainer'
import { getAllCountries, getActivities } from '../redux/actions'
import Filters from '../components/Filters'
import { useDispatch } from 'react-redux'
import '../style.css'

const HomePage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllCountries())
		dispatch(getActivities())
	}, [dispatch])

	return (
		<div className='container backgroundImageHome'>
			<div className='filtersContainer'>
				<Filters />
			</div>
			<div className='container'>
				<CardsContainer />
			</div>
		</div>
	)
}
export default HomePage
