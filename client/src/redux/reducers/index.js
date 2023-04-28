import { CLEAN_COUNTRY, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITIES, CREATE_ACTIVITY, FILTER_BY_CONTINENT, SORT_BY_NAME, SORT_BY_POPULATION, SEARCH_BY_NAME, FILTER_BY_ACTIVITY, RESET_FILTERS, POST_MESSAGE, CLEAN_MESSAGE } from '../action-type';

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
  activities: [],
  error: { type: '', message: '' }
}

export const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
        countries: action.payload.sort((a, b) => a.name.localeCompare(b.name))
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryById: action.payload
      };

    case CLEAN_COUNTRY:
      return {
        ...state,
        countryById: action.payload
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const countriesFilteredByContinent = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continent[0] === action.payload);
      const combinedFilterAndSortByContinent = [...countriesFilteredByContinent].sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        countries: combinedFilterAndSortByContinent
      };

    case FILTER_BY_ACTIVITY:
      const activity = state.activities.find(activity => activity.name === action.payload);
      const countriesFilteredByActivity = action.payload === 'All'
        ? state.allCountries
        : state.allCountries.filter(country =>
          country.activities.some(a =>
            a.name === activity.name && a.type === activity.type
          )
        );
      const combinedFilterAndSortByActivity = [...countriesFilteredByActivity].sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        countries: combinedFilterAndSortByActivity
      };

    case RESET_FILTERS:
      const combinedResetFilters = [...state.allCountries].sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        countries: combinedResetFilters
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: action.payload
      }

    case SORT_BY_NAME:
      const countriesOrderedByName = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
      const countriesReversedByName = action.payload === 'DESC' ? countriesOrderedByName.reverse() : countriesOrderedByName;
      return {
        ...state,
        countries: countriesReversedByName
      };

    case SORT_BY_POPULATION:
      const countriesOrderedByPopulation = [...state.countries].sort((a, b) => Number(a.population) - Number(b.population));
      const countriesReversedByPopulation = action.payload === 'DESC' ? countriesOrderedByPopulation.reverse() : countriesOrderedByPopulation;
      return {
        ...state,
        countries: countriesReversedByPopulation
      };
    case POST_MESSAGE:
      return {
        ...state,
        error: { type: action.payload.type, message: action.payload.message }
      }

    case CLEAN_MESSAGE:
      return {
        ...state,
        error: { type: '', message: '' }
      }


    default:
      return state;
  }
};
