let locationData = [];

const getLocations = () =>
{
  return locationData.locations;
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
