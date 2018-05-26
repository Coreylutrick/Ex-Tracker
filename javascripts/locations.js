// const loadLoactions = (successFunction, errorFunction) =>
// {
//   $.get('../db/locations.json')
//     .done(successFunction)
//     .fail(errorFunction);
// };

const locationJSON = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/locations.json')
      .done((data) =>
      {
        resolve(data.locations);
      })
      .fail((err) =>
      {
        reject('error', err);
      });
  });
};

module.exports = locationJSON;
