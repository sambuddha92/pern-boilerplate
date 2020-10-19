require("dotenv").config();
const app = require("./app.js");
const { resolve } = require("path");

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT} 🔥`);
});
