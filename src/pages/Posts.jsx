import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import '../styles/ProximaNova/stylesheet.css';
import Createform from '../components/CreateForm/CreateForm';
import Card from '../components/Card/Card';
import { getCityWeather, removeCityFromList } from '../store/actions/actions';

function Posts({ getCityWeather, cities, removeCityFromList }) {
  const fetchWeather = (name) => {
    getCityWeather(name);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>
          <span>S</span>inoptik
        </h1>
        <h2>CHOOSE A CITY</h2>
      </div>
      <div className="container">
        <Createform setWeather={fetchWeather} />
        {cities.map((city) => {
          return (
            <div className="card" key={city.id}>
              <Card
                handleRemoveCity={removeCityFromList}
                cityInfo={city}
                setWeather={fetchWeather}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cities: state.stateReducer.cities,
  };
};

const mapDispatchToProps = {
  getCityWeather,
  removeCityFromList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
