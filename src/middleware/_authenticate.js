require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    jwt.verify(
      req.cookies.t,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: "Unauthorized",
          });
        } else {
          req.user = decoded.user;
          next();
        }
      }
    );
  } catch (error) {
    throw error;
  }
};
