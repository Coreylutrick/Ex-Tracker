const loadEx = require('./ex');
const dom = require('./dom');
const loadLocations = require('./locations');
const dataStore = require('./dataStore');
const buttons = require('./events');

const whenLocationsLoad = (data) =>
{
  $('#locationContainer').append(dom.writeLocations(data.locations));
  dataStore.setLocations(data);
  buttons();
};

const whenLocationsDontLoad = (error) =>
{
  console.log('error!', error);
};

const whenExLoads = (data) =>
{
  $('#exContainer').append(dom.writeEx(data.ex));
};

const whenExDoesntLoad = (error) =>
{
  console.log('error!', error);
};

const initializer = () =>
{
  loadEx(whenExLoads, whenExDoesntLoad);
  loadLocations(whenLocationsLoad, whenLocationsDontLoad);
};

module.exports = initializer;
