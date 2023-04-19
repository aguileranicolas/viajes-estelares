import React from "react"
import './styles/formPage.css'

const FormPage = () => {
  return (
    <div className="CardF-Container">
    <form  className='Card-InfoF'>
    <div className="inputLabel">
        <label className="labelF" htmlFor="Activity">Activity:</label>
        <input className="inputF" type="text" name="Activity" />
    </div>
    <div className="inputLabel"> 
      <label className="labelF" htmlFor="Dificultad">Dificultad</label>
      <input className="inputF" type="text" name="Dificultad" />
    </div>
    <div className="inputLabel">
      <label className="labelF" htmlFor="Duracion">Duracion:</label>
      <input className="inputF" type="text" name="Duracion" />
    </div>
    <div className="inputLabel">
      <label className="labelF" htmlFor="Temporada">Temporada:</label>
      <input className="inputF" type="text" name="Temporada" />
    </div>
    
    <button className="ButtonForm">Create</button>
    </form>
    </div>
    )
   }
    
   export default FormPage


   
    
    
 
      
