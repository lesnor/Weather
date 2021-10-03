export const checkIsCityExist = (cityId) => {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  const isCityAlreadyExist = cities.find((city) => cityId === city.id);
  return isCityAlreadyExist;
};
