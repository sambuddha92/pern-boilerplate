const express = require("express"),
  cookieParser = require("cookie-parser"),
  helmet = require("helmet"),
  yes = require("yes-https"),
  logger = require("morgan"),
  { resolve } = require("path");

/*Initiate Express app*/
const app = express();

/*Apply middleware with separate requirements in prod and dev in mind*/
//Middleware appicable identically in all environments
app.use(express.static(resolve(__dirname, "..", "client", "build"))); //To serve static files such as images, CSS, and JS
app.use(express.urlencoded({ extended: true })); //parses incoming requests with urlencoded payloads
app.use(express.json()); //parses incoming request bodies and makes it available under the req.body property.
app.use(cookieParser()); //parses cookie header and populate req.cookies with an object keyed by the cookie names.

//Middleware appicable differently in different environments
if (process.env.NODE_ENV === "production") {
  app.use(yes()); //yes-https makes it easy to require https for connect based applications.
  app.use(helmet()); //helmet adds various http headers, making the app more secure
} else {
  app.use(logger("dev")); //morgan displays concise output colored by response status for development use
}

/*Define routes*/
app.use("/api/user", require("./routes/api/user"));
app.use("/auth/local", require("./routes/auth/local"));

module.exports = app;
