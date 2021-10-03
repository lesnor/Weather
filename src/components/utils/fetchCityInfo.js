import axios from 'axios';

export const fetchCityInfo = async (cityName) => {
  const city = await axios.get(
    ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1cd9453f9b6e6661890c8dc7a011898d`
  );
  return city;
};
