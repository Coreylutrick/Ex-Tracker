let locationData = [];

const getLocations = () =>
{
  return locationData;
};

const setLocations = (locations) =>
{
  locationData = locations;
  return locationData;
};

module.exports = {
  setLocations,
  getLocations,
};
