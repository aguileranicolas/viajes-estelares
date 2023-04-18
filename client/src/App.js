import './App.css';
//import logo from './logo.svg';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../src/screens/LandingPage'
import DetailPage from '../src/screens/DetailPage'
import FormPage from '../src/screens/FormPage'
import HomePage from '../src/screens/HomePage'
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/countries" element={<HomePage />} />
        <Route path="/countries/:idPais" element={<DetailPage />} />
        <Route path="/activity" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
