import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/landingPage.css'

const LandingPage = () => {
  return (
    <>
      <div className="bg-mountain">
        <div className="container landingFlex">
          Welcome to Star Travel
          <NavLink to="/Countries">
            <button className="button">Enter</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}
export default LandingPage
