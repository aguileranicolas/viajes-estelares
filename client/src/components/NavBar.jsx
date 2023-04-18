import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/NavBar.css'
import TravelIcon from './icons/TravelIcon'

const NavBar = () => {
  return (
    <>
      <nav className='nav'>
        <NavLink to='/'><TravelIcon /></NavLink>
        <ul className='ulFlex'>
          <li className='navLi'>
            <NavLink to='/countries'>
              <h3 className='navText'>Countries</h3>
            </NavLink>
          </li>
          <li className='navLi'>
            <NavLink to='/'>
              <h3 className='navText'>About</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export { NavBar }
