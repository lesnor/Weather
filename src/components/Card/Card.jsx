import React from 'react';
import { connect } from 'react-redux';
import { getCityWeather, updateCityInfo } from '../../store/actions/actions';
import { formatDate } from '../utils/timer';
import MyLink from '../UI/Link/MyLink';
import classnames from 'classnames';
import { TEMP_HOT, TEMP_WARM } from '../../constants';
import { getTemperature } from '../../helpers';

const Card = ({ cityInfo, handleRemoveCity, updateCityInfo }) => {
  const currentTemp = getTemperature(cityInfo.main.temp);

  return (
    <div>
      {cityInfo ? (
        <div
          data-testid={'card-wrapper'}
          className={classnames('sinoptik', {
            'hot-form': currentTemp >= TEMP_HOT,
            'warmly-form': currentTemp < TEMP_HOT && currentTemp > TEMP_WARM,
            'cold-form': currentTemp <= TEMP_WARM,
          })}
        >
          <div className="sinoptik__content">
            <div>
              <div className="sinoptik__result">
                Время сейчас: {formatDate(cityInfo.timezone)}
              </div>
              <div className="sinoptik__result">
                Погода, {cityInfo.name}:{' '}
                <span data-testid={'current-temp'}>{currentTemp}</span>°C
              </div>
            </div>
            <div>
              <span
                data-testid={'remove'}
                onClick={() => handleRemoveCity(cityInfo.id)}
                className="sinoptik__close"
              />
              <img
                className="sinoptik__img"
                src={`http://openweathermap.org/img/w/${cityInfo.weather[0].icon}.png`}
                alt=""
              />
            </div>
          </div>
          <div className="sinoptik__info">
            <MyLink
              style={{ fontWeight: 'normal' }}
              to={`/posts/${cityInfo.name}`}
            >
              Детальная информация
            </MyLink>
            <button
              data-testid={'update'}
              className={classnames('sinoptik__refresh-button', {
                'hot-button': currentTemp >= TEMP_HOT,
                'warmly-button':
                  currentTemp < TEMP_HOT && currentTemp > TEMP_WARM,
                'cold-button': currentTemp <= TEMP_WARM,
              })}
              onClick={() => updateCityInfo(cityInfo.name)}
            >
              Обновить информацию
            </button>
          </div>
        </div>
      ) : (
        <h1>Cписок городов пуст!</h1>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  getCityWeather,
  updateCityInfo,
};
export default connect(null, mapDispatchToProps)(Card);
