import React, { useState } from 'react';
import cl from './createForm.module.css';

const Createform = ({ setWeather }) => {
  const [city, setCity] = useState('Харьков');
  const setCityValue = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWeather(city);
  };

  return (
    <form className={cl.Createform} onSubmit={handleSubmit} action="" data-testid={'create-form'}>
      <input
        type="text"
        placeholder="Выберите город"
        value={city}
        onChange={setCityValue}
      />
      <button data-testid={'submit-form'}>Узнать погоду</button>
    </form>
  );
};
export default Createform;
