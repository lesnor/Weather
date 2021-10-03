import * as constans from '../constans/constans';

const initialState = {
  cityInfo: null,
  cities: JSON.parse(localStorage.getItem('cities')) || [],
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case constans.FETCH_CITY_WEATHER: {
      console.log(action);
      return { ...state, cityInfo: action.cityInfo };
    }
    case constans.ADD_CITY_TO_LIST: {
      return { ...state, cities: [...state.cities, action.cityInfo] };
    }
    case constans.REMOVE_CITY_FROM_LIST: {
      return { ...state, cities: action.cities };
    }
    case constans.UPDATE_CITY_INFO: {
      return { ...state, cities: action.cities };
    }
    default:
      return state;
  }
};

export default stateReducer;
