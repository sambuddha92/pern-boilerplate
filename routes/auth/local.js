require("dotenv").config();
const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  { pool } = require("../../config/db"),
  mw = require("../../config/middleware"),
  util = require("../../config/util");

//@route    POST auth/local
//@desc     Authenticate user and set access token cookie
//@access   private
router.post("/", async (req, res) => {
  try {
    const { login_id, password } = req.body;

    //Check and notify if user does not exist
    const user = await util.getUserByLoginId(login_id, pool);
    if (!user) {
      return res.status(404).json({
        message: "No such user",
      });
    }

    //Store user details and notify if passwords do not match
    const { hashed_password } = user;
    const passwords_match = await bcrypt.compare(password, hashed_password);
    if (!passwords_match) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    //Create and set access token via cookie
    let token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
    res.cookie("t", token, {
      maxAge: 5 * 3600 * 1000, //5 hours in milli seconds
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Logged in",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route    DELETE auth/local
//@desc     Delete access token cookie
//@access   private
router.delete("/",[mw.authenticate], async (req, res) => {
  try {
    res.clearCookie("t");
    return res.status(200).json({
      message: "Logged out",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//Export router
module.exports = router;
