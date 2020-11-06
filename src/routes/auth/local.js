const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  mw = require("../../middleware");

//@route    POST auth/local
//@desc     Authenticate user and set access token cookie
//@access   private
router.post("/", async (req, res) => {
  try {
    const { login_id, password } = req.body;

    //Check and notify if user does not exist
    const user = await mw.db.getUserByLoginId(login_id);
    if (!user) {
      return res.status(404).json({
        message: "No such user",
      });
    }

    //Check and notify if passwords do not match
    const { hashed_password } = user;
    const passwords_match = await bcrypt.compare(password, hashed_password);
    if (!passwords_match) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    //Prepare user info to be sent to client and for access token
    const authenticated_user = {
      id: user.id,
      login_id: user.login_id,
      first_name: user.first_name,
      last_name: user.last_name,
    };

    //Create and set access token via cookie
    let token = jwt.sign(
      {
        user: authenticated_user,
      },
      process.env.AUTH_TOKEN_SECRET
    );
    let expiryTime = new Date(+process.env.AUTH_EXPIRES_IN_SECONDS * 1000 + Date.now());
    res.cookie("t", token, {
      expires: expiryTime,
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Logged in",
      payload: {
        expires: expiryTime,
        user: authenticated_user,
      },
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
router.delete("/", [mw.auth.authenticate], async (req, res) => {
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
