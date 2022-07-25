const { verifyToken } = require("./jwt/verifyToken");

const authValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Token이 없습니다!",
    });
  }

  req.token = authorization;
  next();
};

const authUser = (req, res, next) => {
  const { token } = req;

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({
      message: "Token이 만료되었습니다!",
    });
  }

  req.userId = decoded.data;
  next();
};

const auth = [authValidation, authUser];

module.exports = { auth };
