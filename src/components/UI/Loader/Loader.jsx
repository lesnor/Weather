import React from 'react';
import classes from './Loader.module.css';
const Loader = () => {
  return <div className={classes.loader} data-testid={'loader'}/>;
};

export default Loader;
