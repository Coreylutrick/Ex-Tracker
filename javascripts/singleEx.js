const loadEx = require('./ex');
const loadLocations = require('./locations');

const singleEx = () =>
{
  let ex = {};
  return loadEx().then((exs) =>
  {
    ex = exs[0];
    ex.hangouts = [];
    return loadLocations().then((locations) =>
    {
      const allLocations = locations;
      allLocations.filter((location) =>
      {
        ex.location.forEach(element =>
        {
          if (element === location.locationID)
          {
            ex.hangouts.push(location);
          }
        });
        return false;
      });
      return Promise.resolve(ex);
    });
  });
};

const singleEx2 = () =>
{
  let ex = {};
  return loadEx().then((exs) =>
  {
    ex = exs[1];
    ex.hangouts = [];
    return loadLocations().then((locations) =>
    {
      const allLocations = locations;
      allLocations.filter((location) =>
      {
        ex.location.forEach(element =>
        {
          if (element === location.locationID)
          {
            ex.hangouts.push(location);
          }
        });
        return false;
      });
      return Promise.resolve(ex);
    });
  });
};

const singleEx3 = () =>
{
  let ex = {};
  return loadEx().then((exs) =>
  {
    ex = exs[2];
    ex.hangouts = [];
    return loadLocations().then((locations) =>
    {
      const allLocations = locations;
      allLocations.filter((location) =>
      {
        ex.location.forEach(element =>
        {
          if (element === location.locationID)
          {
            ex.hangouts.push(location);
          }
        });
        return false;
      });
      return Promise.resolve(ex);
    });
  });
};

const singleEx4 = () =>
{
  let ex = {};
  return loadEx().then((exs) =>
  {
    ex = exs[3];
    ex.hangouts = [];
    return loadLocations().then((locations) =>
    {
      const allLocations = locations;
      allLocations.filter((location) =>
      {
        ex.location.forEach(element =>
        {
          if (element === location.locationID)
          {
            ex.hangouts.push(location);
          }
        });
        return false;
      });
      return Promise.resolve(ex);
    });
  });
};

module.exports =
{
  singleEx,
  singleEx2,
  singleEx3,
  singleEx4,
};
