require("dotenv").config();
const app = require("./src/app");

// use dynamic port for deployment platforms like Heroku
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Robot API server running on port ${PORT}`);
});
