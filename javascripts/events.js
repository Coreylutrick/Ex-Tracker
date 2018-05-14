const dom = require('./dom');
const dataStore = require('./dataStore');

const initializeButtons = () =>
{
  $(document).ready();
  $('button#morning').click(morning);
  $('button#afternoon').click(afternoon);
  $('button#evening').click(evening);
  $('button#night').click(night);
  $('#searchBar').keypress(search);
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

const search = (e) =>
{
  if (e.keyCode === 13)
  {
    const input = $(e.target).val();
    $(`#locationContainer .location:not(:contains(${input}))`).hide();
    $(e.target).val('');
  }
};

module.exports = initializeButtons;
