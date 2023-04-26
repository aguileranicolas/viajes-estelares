import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css'

const LandingPage = () => {
	return (
		<>
			<div className='backgroundImage'>
				<div className='container whiteShadowContainer'>
					<h1 className='heading1'>Welcome to Star Travel</h1>
					<NavLink to='/countries'>
						<button className='button'>Enter</button>
					</NavLink>
				</div>
			</div>
		</>
	)
}
export default LandingPage
