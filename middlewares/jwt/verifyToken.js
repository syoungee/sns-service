require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const verifyToken = (token) => {
  try {
    const isValid = jwt.verify(token, secret);
    return isValid;
  } catch (err) {
    return null;
  }
};

module.exports = {
  verifyToken,
};
