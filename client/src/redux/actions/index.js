import axios from 'axios';
import { GETALLCOUNTRIES, GETCOUNTRYBYID, CLEAN_COUNTRY, GETACTIVITIES, CREATE_ACTIVITY } from '../action-type';


// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

//ACTION CREATOR
const getAllCountries = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/countries')
      return dispatch({ type: GETALLCOUNTRIES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}

const getCountryById = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/countries/' + id)
      return dispatch({ type: GETCOUNTRYBYID, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}

const cleanCountry = () => {
  const payload = {
    id: '',
    imageFlag: [],
    name: '',
    capital: '',
    continent: [],
    subregion: '',
    area: 0,
    population: 0,
    activities: []
  }
  return async function (dispatch) {
    try {
      return dispatch({ type: CLEAN_COUNTRY, payload })
    } catch (error) {
      console.error(error)
    }
  }
}
const getActivities = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/activities')
      return dispatch({ type: GETACTIVITIES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}
const postActivity = (activity) => {
  return async function (dispatch) {
    try {
      let response = await axios.post('http://localhost:3001/activities', activity)
      return dispatch({ type: CREATE_ACTIVITY, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}


export { getAllCountries, getCountryById, cleanCountry, getActivities, postActivity }






