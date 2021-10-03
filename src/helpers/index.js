import { TEMP_CONST } from '../constants';

export const getTemperature = (temp) => {
    return (temp - TEMP_CONST).toFixed(1)
}

export const convertToKm = (meters) => {
    return meters / 1000;
}