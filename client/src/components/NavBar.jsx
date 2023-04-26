import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import TravelIcon from './icons/TravelIcon'
import SearchBar from './SearchBar'
import '../style.css'
import { useDispatch } from 'react-redux'
import { getActivities, getAllCountries } from '../redux/actions'

const NavBar = () => {
	const location = useLocation()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllCountries())
		dispatch(getActivities())
	}, [dispatch, location.pathname])

	return (
		<>
			<nav className='navBar'>
				<div className='icon'>
					<NavLink to='/'>
						<TravelIcon />
					</NavLink>
				</div>
				<div>{location.pathname === '/countries' && <SearchBar />}</div>
				<ul className='navigationButtonsContainer'>
					<li className='navigationButton'>
						<NavLink to='/countries'>
							<h3 className='navText'>Countries</h3>
						</NavLink>
					</li>
					<li className='navigationButton'>
						<NavLink to='/formPage'>
							<h3 className='navText'>Activities</h3>
						</NavLink>
					</li>
					<li className='navigationButton'>
						<NavLink to='/about'>
							<h3 className='navText'>About</h3>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export { NavBar }
