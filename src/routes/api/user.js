const express = require("express"),
 router = express.Router(),
 bcrypt = require("bcryptjs"),
 jwt = require("jsonwebtoken"),
 mw = require("../../middleware")

//@route    POST api/user
//@desc     Create a new user
//@access   public
router.post("/", async (req, res) => {
  try {
    const { login_id, password, first_name, last_name } = req.body;

    //Check and notify if user already exists
    const existingUser = await mw.db.getUserByLoginId(login_id);

    if (existingUser) {
      return res.status(409).json({
        message: "Login id already in use",
      });
    }

    //Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    //Insert new user to the table and store the newUser in a variable
    const newUser = await mw.db.addNewUser(login_id, hashed_password, first_name, last_name);

    //Prepare user info to be sent to client and for access token
    const authenticated_user = {
      id: newUser.id,
      login_id: newUser.login_id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
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
      message: "Registered & logged in",
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

//@route    GET api/user/me
//@desc     Get the details of an existing user
//@access   private
router.get("/me", [mw.auth.authenticate], async (req,res) => {
  try {
    res.status(200).json({
      message: "Success",
      payload: req.user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route    PUT api/user/:id
//@desc     Update the details of an existing user
//@access   private

//@route    DELETE api/user/:id
//@desc     Delete an existing user
//@access   private

//Export router
module.exports = router;
