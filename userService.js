const { db } = require('./db');

const findOne = (guid) => {
  let result = 'no encontre nada';

  db.forEach((element) => {
    if (guid === element.guid) {
      result = element;
    }
  });
  return result;
};

module.exports = findOne;
