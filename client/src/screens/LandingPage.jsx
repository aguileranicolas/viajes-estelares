import React from "react"
import {NavLink } from "react-router-dom";
import './styles/landingPage.css'

const LandingPage = () => {
  return (
    <>
    <div className="bg-mountain">
      <div className="container landingFlex">
        Bienvenidos a Viajes Estelares
        <NavLink to={'/Countries'}><button className="button">Ingresar</button></NavLink>
      </div>
      </div>
    </>

      
  )
}
export default LandingPage