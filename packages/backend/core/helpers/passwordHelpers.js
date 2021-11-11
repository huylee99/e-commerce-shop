const bcrypt = require('bcryptjs');

const hashGenerator = async password => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return hashedPassword;
};

const comparePassword = async (rawPassword, saltedPassword) => {
  const result = await bcrypt.compare(rawPassword, saltedPassword);
  return result;
};

module.exports = { hashGenerator, comparePassword };
