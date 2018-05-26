const loadEx = require('./ex');
const dom = require('./dom');
const loadLocations = require('./locations');
const dataStore = require('./dataStore');
const buttons = require('./events');

const exProm = () =>
{
  const exes = loadEx().then((result) =>
  {
    $('#exContainer').html(dom.writeEx(result));
    loadLocations().then((locations) =>
    {
      $('#locationContainer').html(dom.writeLocations(locations, result));
      buttons.initializeButtons();
      buttons.ExButtons();
      dataStore.setLocations(locations);
    });
  });
  return exes;
};

const initializer = () =>
{
  exProm();
};

module.exports =
{
  initializer,
};
