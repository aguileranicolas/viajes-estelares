import React, { useEffect, useState } from 'react'
import './styles/formPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { validate } from '../utils/validate'

const FormPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)
  const [activity, setActivity] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countryId: '',
  })
  const [errors, setErrors] = React.useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countryId: '',
  })
  /* const activity = {
    name: 'Fumanchar',
    difficulty: 3,
    duration: 3,
    season: 'Otoño',
    countryId: 'ARG',
  } */

  const handleSubmit = (evento) => {
    evento.preventDefault()
    if (
      errors?.name?.length > 0 ||
      errors?.difficulty?.length > 0 ||
      errors?.duration?.length > 0 ||
      errors?.season?.length > 0 ||
      errors?.countryId?.length > 0
    ) {
      alert('Debes corregir tus errores')
      return
    }
    dispatch(postActivity(activity))
    navigate('/countries')
  }
  const onChange = (evento) => {
    evento.preventDefault()
    setActivity({
      ...activity,
      [evento.target.name]: evento.target.value,
    })
    setErrors(
      validate({
        ...activity,
        [evento.target.name]: evento.target.value,
      })
    )
  }

  console.log(activity.season)

  return (
    <div className="CardF-Container">
      <div className="TextoA">
        Planea tus viajes con las actividades que tu quieras
      </div>
      <form className="Card-InfoF">
        <div className="inputLabel">
          <label className="labelF" htmlFor="Activity">
            Name:
          </label>

          <input
            className="inputF"
            type="text"
            name="name"
            onChange={onChange}
          />
          {errors.name && <p className="Error">{errors.name}</p>}
        </div>
        <div className="inputLabel">
          <label className="labelF" htmlFor="Dificultad">
            Difficulty: {activity.difficulty}
          </label>
          <input
            className="inputF"
            type="range"
            max={5}
            min={1}
            name="difficulty"
            onChange={onChange}
          />
          {errors.difficulty && <p className="Error">{errors.difficulty}</p>}
        </div>
        <div className="inputLabel">
          <label className="labelF" htmlFor="Duracion">
            Duration: {activity.duration} h
          </label>
          <input
            className="inputF"
            type="number"
            min={1}
            max={10}
            name="duration"
            onChange={onChange}
          />
          {errors.duration && <p className="Error">{errors.duration}</p>}
        </div>
        <div className="inputLabel">
          <label className="labelF" htmlFor="season">
            Season: {activity.season}
          </label>
          <div>
            <label htmlFor="verano">
              <input
                id="verano"
                key="verano"
                value="verano"
                className="inputRadio"
                type="radio"
                name="season"
                onChange={onChange}
                checked={activity.season === 'verano'}
                disabled={activity.season === 'verano'}
              />
              Verano
            </label>
            <label htmlFor="otoño">
              <input
                id="otoño"
                key="otoño"
                value="otoño"
                className="inputRadio"
                type="radio"
                name="season"
                onChange={onChange}
                checked={activity.season === 'otoño'}
                disabled={activity.season === 'otoño'}
              />
              Otoño
            </label>
            <label htmlFor="primavera">
              <input
                id="primavera"
                key="primavera"
                value="primavera"
                className="inputRadio"
                type="radio"
                name="season"
                onChange={onChange}
                checked={activity.season === 'primavera'}
                disabled={activity.season === 'primavera'}
              />
              Primavera
            </label>
            <label htmlFor="invierno">
              <input
                id="invierno"
                key="invierno"
                value="invierno"
                className="inputRadio"
                type="radio"
                name="season"
                onChange={onChange}
                checked={activity.season === 'invierno'}
                disabled={activity.season === 'invierno'}
              />
              Invierno
            </label>
          </div>
          {errors.season && <p className="Error">{errors.season}</p>}
        </div>

        <div className="inputLabel">
          <label className="labelF" htmlFor="Country">
            Country:
          </label>
          <select
            id="selectCountry"
            className="inputF"
            type="select"
            name="countryId"
            onChange={onChange}
          >
            <option value="">Selecciona un país</option>
            {countries &&
              countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
          </select>
          {errors.countryId && <p className="Error">{errors.countryId}</p>}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="ButtonForm"
          disabled={errors.name === ''}
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default FormPage
