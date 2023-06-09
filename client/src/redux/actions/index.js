import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, CLEAN_COUNTRY, GET_ACTIVITIES, CREATE_ACTIVITY, FILTER_BY_CONTINENT, SORT_BY_NAME, SORT_BY_POPULATION, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, RESET_FILTERS, POST_MESSAGE, CLEAN_MESSAGE } from '../action-type';


// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

//ACTION CREATOR
const getAllCountries = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/countries')
      return dispatch({ type: GET_ALL_COUNTRIES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}

const getCountryById = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.get('http://localhost:3001/countries/' + id)
      return dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data });
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
      return dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
}

const postActivity = (activity) => {
  return async function (dispatch) {
    try {
      let response = await axios.post('http://localhost:3001/activities', activity)
      console.log(response)
      dispatch({ type: CREATE_ACTIVITY, payload: response.data });
      const message = { type: 'success', message: 'Activity created correctly' };
      dispatch({ type: POST_MESSAGE, payload: message });
      return message;
    } catch (error) {
      console.error(error);
      const message = { type: 'error', message: error.response?.data?.error || 'Error creating activity' };
      dispatch({ type: POST_MESSAGE, payload: message });
      return message;
    }
  }
}


const filterCountriesByContinent = (continent) => {
  return async function (dispatch) {
    try {
      return dispatch({ type: FILTER_BY_CONTINENT, payload: continent })
    } catch (error) {
      console.error(error)
    }
  }
}

const sortByName = (order) => {
  return async function (dispatch) {
    try {
      return dispatch({ type: SORT_BY_NAME, payload: order })
    } catch (error) {
      console.error(error)
    }
  }
}

const sortByPopulation = (order) => {
  return async function (dispatch) {
    try {
      return dispatch({ type: SORT_BY_POPULATION, payload: order })
    } catch (error) {
      console.error(error)
    }
  }
}

const searchByName = (search) => {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/countries/search?name=' + search)
      return dispatch({ type: SEARCH_BY_NAME, payload: response.data })
    } catch (error) {
      console.error(error)
      return dispatch({ type: POST_MESSAGE, payload: { type: 'error', message: error.response?.data?.error || 'Error searching for countries' } });
    }
  }
}

const filterCountriesByActivitity = (activity) => {
  return async function (dispatch) {
    try {
      return dispatch({ type: FILTER_BY_ACTIVITY, payload: activity })
    } catch (error) {
      console.error(error)
    }
  }
}

const resetFilters = () => {
  return async function (dispatch) {
    try {
      return dispatch({ type: RESET_FILTERS })
    } catch (error) {
      console.error(error)
    }
  }
}

const cleanMessage = () => {
  return async function (dispatch) {
    try {
      return dispatch({ type: CLEAN_MESSAGE })
    } catch (error) {
      console.error(error)
    }
  }
}





export { getAllCountries, getCountryById, cleanCountry, getActivities, postActivity, filterCountriesByContinent, sortByName, sortByPopulation, searchByName, filterCountriesByActivitity, resetFilters, cleanMessage }






