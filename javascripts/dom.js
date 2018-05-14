const writeEx = (ex) =>
{
  let domString = '';
  ex.forEach((exx) =>
  {
    domString += `<div class='ex col-md-4 col-md-offset-4'>`;
    domString +=  `<h2>${exx.name}</h2>`;
    domString +=  `<img class='exImg' src='${exx.img}'>`;
    domString +=  `<p><h3>Age:</h3> ${exx.age}</p>`;
    domString +=  `<p><h3>Flaws:</h3> ${exx.flaws}</p>`;
    domString += `</div>`;
  });
  return domString;
};

const writeLocations = (locations) =>
{
  let domString = '';
  locations.forEach((location) =>
  {
    domString += `<div class='location col-md-3'>`;
    domString +=  `<h2>${location.name}</h2>`;
    domString +=  `<img class='locationImg' src='${location.img}'>`;
    domString +=  `<p><h4>Address:</h4> ${location.address}</p>`;
    domString +=  `<p><h4>Time of Day Present:</h4> ${location.time}</p>`;
    domString += `</div>`;
  });
  return domString;
};

const writeLocationsMorn = (locations) =>
{
  let domString = '';
  locations.forEach((location) =>
  {
    if (location.time === 'Morning')
    {
      domString += `<div class='location col-md-3'>`;
      domString +=  `<h2>${location.name}</h2>`;
      domString +=  `<img class='locationImg' src='${location.img}'>`;
      domString +=  `<p><h4>Address:</h4> ${location.address}</p>`;
      domString +=  `<p><h4>Time of Day Present:</h4> ${location.time}</p>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const writeLocationsAfternoon = (locations) =>
{
  let domString = '';
  locations.forEach((location) =>
  {
    if (location.time === 'Afternoon')
    {
      domString += `<div class='location col-md-3'>`;
      domString +=  `<h2>${location.name}</h2>`;
      domString +=  `<img class='locationImg' src='${location.img}'>`;
      domString +=  `<p><h4>Address:</h4> ${location.address}</p>`;
      domString +=  `<p><h4>Time of Day Present:</h4> ${location.time}</p>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const writeLocationsEvening = (locations) =>
{
  let domString = '';
  locations.forEach((location) =>
  {
    if (location.time === 'Evening')
    {
      domString += `<div class='location col-md-3'>`;
      domString +=  `<h2>${location.name}</h2>`;
      domString +=  `<img class='locationImg' src='${location.img}'>`;
      domString +=  `<p><h4>Address:</h4> ${location.address}</p>`;
      domString +=  `<p><h4>Time of Day Present:</h4> ${location.time}</p>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const writeLocationsNight = (locations) =>
{
  let domString = '';
  locations.forEach((location) =>
  {
    if (location.time === 'Night')
    {
      domString += `<div class='location col-md-3'>`;
      domString +=  `<h2>${location.name}</h2>`;
      domString +=  `<img class='locationImg' src='${location.img}'>`;
      domString +=  `<p><h4>Address:</h4> ${location.address}</p>`;
      domString +=  `<p><h4>Time of Day Present:</h4> ${location.time}</p>`;
      domString += `</div>`;
    }
  });
  return domString;
};

module.exports =
  {
    writeEx,
    writeLocations,
    writeLocationsAfternoon,
    writeLocationsEvening,
    writeLocationsMorn,
    writeLocationsNight,
  };
