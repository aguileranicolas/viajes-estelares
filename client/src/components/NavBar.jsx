import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import TravelIcon from './icons/TravelIcon'
import SearchBar from './SearchBar'
import '../style.css'
import { useDispatch, useSelector } from 'react-redux'
import { cleanMessage, getActivities, getAllCountries } from '../redux/actions'
import Errors from './Errors'

export const NavBar = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const error = useSelector(state => state.error)
	let shouldShowModal = error.message?.length > 0
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		setIsModalOpen(true)
		return () => {
			setTimeout(() => {
				setIsModalOpen(false)
				dispatch(cleanMessage())
			}, 6000)
		}
	}, [shouldShowModal, dispatch])

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
			{isModalOpen && (
				<div className='modal'>
					<Errors type={error.type} message={error.message} />
				</div>
			)}
		</>
	)
}
