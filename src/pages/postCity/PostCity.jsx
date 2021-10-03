import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import MyLink from '../../components/UI/Link/MyLink';
import Loader from '../../components/UI/Loader/Loader';
import { fetchCityWeather, getCityWeather } from '../../store/actions/actions';
import classnames from 'classnames';
import { convertToKm, getTemperature } from '../../helpers';

const PostCity = ({ cityInfo, getCityWeather }) => {
  const { name } = useParams();
  console.log(cityInfo);
  useEffect(() => {
    getCityWeather(name);
  }, [getCityWeather, name]);

  return (
    <div>
      {cityInfo ? (
        <div
          data-testid={'city-info'}
          className={classnames('CityInfoBody', `CityInfoBody${cityInfo.weather[0].main}`)}
        >
          <MyLink
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            to={'/posts'}
          >
            Вернуться к постам
          </MyLink>

          <h1 style={{ textAlign: 'center', paddingTop: '35px' }}>
            Погода, {cityInfo.name}:{' '}
            {getTemperature(cityInfo.main.temp)} °C
          </h1>
          <div className="cityInfo">
            <div>
              <div>Давление: {cityInfo.main.pressure} мм рт. ст.</div>

              <div>
                Относительная влажность: {cityInfo.main.humidity} %
              </div>
              <div>Облачность: {cityInfo.clouds.all} %</div>
            </div>
            <div>
              <div>Направление ветра: {cityInfo.wind.deg}°</div>
              <div>Видимость: {convertToKm(cityInfo.visibility)} км</div>
              <div>Скорость ветра: {cityInfo.wind.speed} м/c</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '200px',
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityInfo: state.stateReducer.cityInfo,
    cities: state.stateReducer.cities,
  };
};
const mapDispatchToProps = {
  getCityWeather,
  fetchCityWeather,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostCity);
