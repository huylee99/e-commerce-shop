const toJSON = obj => {
  return JSON.parse(JSON.stringify(obj));
};

module.exports = toJSON;
