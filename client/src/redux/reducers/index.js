import { CLEAN_COUNTRY, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITIES, CREATE_ACTIVITY, FILTER_BY_CONTINENT, SORT_BY_NAME, SORT_BY_POPULATION, SEARCH_BY_NAME } from '../action-type';

const initialState = {
  countries: [],
  allCountries: [],
  countryById: {
    id: '',
    imageFlag: [],
    name: '',
    capital: '',
    continent: [],
    subregion: '',
    area: 0,
    population: 0,
    activities: []
  },
  activities: []
}

export const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload
      }
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryById: action.payload
      }
    case CLEAN_COUNTRY:
      return {
        ...state,
        countryById: action.payload
      }
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      }

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries
      const countriesFiltered = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continent[0] === action.payload)
      return {
        ...state,
        countries: countriesFiltered
      }

    case SORT_BY_NAME:
      const countriesOrdered = action.payload === 'ASC' ?
        [...state.countries].sort((a, b) => a.name.localeCompare(b.name)) :
        action.payload === 'DESC' ? [...state.countries].sort((a, b) => b.name.localeCompare(a.name)) :
          allCountries;
      return {
        ...state,
        countries: countriesOrdered
      };

    case SORT_BY_POPULATION:
      const populationOrdered = action.payload === 'ASC' ?
        [...state.countries].sort((a, b) => Number(a.population) - Number(b.population)) :
        action.payload === 'DESC' ? [...state.countries].sort((a, b) => Number(b.population) - Number(a.population)) :
          allCountries;
      return {
        ...state,
        countries: populationOrdered
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: action.payload
      }

    default:
      return state;
  }
};