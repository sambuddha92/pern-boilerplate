require("dotenv").config({ silent: process.env.NODE_ENV === 'production' });
const app = require("./src/app");
const { resolve } = require("path");

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT} 🔥`);
});
