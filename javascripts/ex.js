// const loadEx = (successFunction, errorFunction) =>
// {
//   $.get('../db/ex.json')
//     .done(successFunction)
//     .fail(errorFunction);
// };

const exJSON = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/ex.json')
      .done((data) =>
      {
        resolve(data.ex);
      })
      .fail((err) =>
      {
        reject('error', err);
      });
  });
};

module.exports = exJSON;
