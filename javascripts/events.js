const dom = require('./dom');
const dataStore = require('./dataStore');
const data = require('./singleEx');

const ExButtons = () =>
{
  $('#24').click(ex1);
  $('#25').click(ex2);
  $('#26').click(ex3);
  $('#27').click(ex4);
};

const initializeButtons = () =>
{
  $('button#morning').click(morning);
  $('button#afternoon').click(afternoon);
  $('button#evening').click(evening);
  $('button#night').click(night);
  $('#searchBar').keypress(search);
};

const ex1 = () =>
{
  const myResults = [];
  data.singleEx().then((results) =>
  {
    myResults.push(results);
    $('#exContainer').html(dom.writeEx2(myResults));
  });
};

const ex2 = () =>
{
  const myResults = [];
  data.singleEx2().then((results) =>
  {
    myResults.push(results);
    $('#exContainer').html(dom.writeEx2(myResults));
  });
};

const ex3 = () =>
{
  const myResults = [];
  data.singleEx3().then((results) =>
  {
    myResults.push(results);
    $('#exContainer').html(dom.writeEx2(myResults));
  });
};

const ex4 = () =>
{
  const myResults = [];
  data.singleEx4().then((results) =>
  {
    myResults.push(results);
    $('#exContainer').html(dom.writeEx2(myResults));
  });
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

module.exports =
{
  initializeButtons,
  ExButtons,
};
