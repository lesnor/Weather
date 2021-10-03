import { checkIsCityExist } from '../../components/utils/checkIsCityExist';
import { fetchCityInfo } from '../../components/utils/fetchCityInfo';
import * as constans from '../constans/constans';

export const fetchCityWeather = (cityInfo) => ({
  type: constans.FETCH_CITY_WEATHER,
  cityInfo,
});

export const addCityToList = (cityInfo) => {
  if (checkIsCityExist(cityInfo.id)) {
    return { type: constans.ADD_CITY_TO_LIST_FAILURE };
  } else {
    return { type: constans.ADD_CITY_TO_LIST, cityInfo };
  }
};

export const updateCityInfo = (cityName) => async (dispatch) => {
  const cities = JSON.parse(localStorage.getItem('cities'));
  const updatedCityInfo = await fetchCityInfo(cityName);
  const updatedCitiesList = cities.map((city) => {
    if (cityName === city.name) {
      return updatedCityInfo.data;
    } else {
      return city;
    }
  });
  localStorage.setItem('cities', JSON.stringify(updatedCitiesList));
  dispatch({
    type: constans.UPDATE_CITY_INFO,
    cities: updatedCitiesList,
  });
};

export const removeCityFromList = (cityId) => (dispatch) => {
  const cities = JSON.parse(localStorage.getItem('cities'));
  const filteredCitiesList = cities.filter((city) => !(cityId === city.id));
  console.log(filteredCitiesList);
  localStorage.setItem('cities', JSON.stringify(filteredCitiesList));
  dispatch({
    type: constans.REMOVE_CITY_FROM_LIST,
    cities: filteredCitiesList,
  });
};

export const saveCityInfo = (cityInfo) => () => {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  !checkIsCityExist(cityInfo.id) && cities.push(cityInfo);
  localStorage.setItem('cities', JSON.stringify(cities));
  return {
    type: constans.SAVE_CITY_INFO,
  };
};

export const getCityWeather = (cityName) => async (dispatch) => {
  fetchCityInfo(cityName).then((weatherInfo) => {
    console.log(weatherInfo);
    dispatch(fetchCityWeather(weatherInfo.data));
    dispatch(addCityToList(weatherInfo.data));
    dispatch(saveCityInfo(weatherInfo.data));
  });
};
// 1cd9453f9b6e6661890c8dc7a011898d
// 0eb576c188bc534fb5e44f7795b82e43
