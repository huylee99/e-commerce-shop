const splitToken = authHeader => {
  return authHeader.split(' ')[1];
};

module.exports = splitToken;
