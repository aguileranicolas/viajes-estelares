import './App.css'
// import logo from './logo.svg';
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from '../src/screens/LandingPage'
import DetailPage from '../src/screens/DetailPage'
import FormPage from '../src/screens/FormPage'
import HomePage from './screens/HomePage'
import { NavBar } from './components/NavBar'
import ActivitiesPage from './screens/ActivitiesPage'
import About from './screens/About'

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/countries' element={<HomePage />} />
        <Route path='/countries/:idPais' element={<DetailPage />} />
        <Route path='/FormPage' element={<FormPage />} />
        <Route path='/activities' element={<ActivitiesPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
