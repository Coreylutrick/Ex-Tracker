const dom = require('./dom');
const dataStore = require('./dataStore');

const initializeButtons = () =>
{
  $(document).ready();
  $('button#morning').click(morning);
  $('button#afternoon').click(afternoon);
  $('button#evening').click(evening);
  $('button#night').click(night);
};

const morning = () =>
{
  $('#locationContainer').html(dom.writeLocationsMorn(dataStore.getLocations()));
};

const afternoon = () =>
{
  $('#locationContainer').html(dom.writeLocationsAfternoon(dataStore.getLocations()));
};

const evening = () =>
{
  $('#locationContainer').html(dom.writeLocationsEvening(dataStore.getLocations()));
};

const night = () =>
{
  $('#locationContainer').html(dom.writeLocationsNight(dataStore.getLocations()));
};

module.exports = initializeButtons;
