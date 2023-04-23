import { CLEAN_COUNTRY, GETALLCOUNTRIES, GETCOUNTRYBYID, GETACTIVITIES, CREATE_ACTIVITY } from '../action-type';

const initialState = {
  countries: [],
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
    case GETALLCOUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case GETCOUNTRYBYID:
      return {
        ...state,
        countryById: action.payload
      }
    case CLEAN_COUNTRY:
      return {
        ...state,
        countryById: action.payload
      }
    case GETACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      }



    default:
      return state;
  }
};