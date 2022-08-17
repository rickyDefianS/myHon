if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("./config/mongoConnection");

const express = require("express");
const cors = require("cors");
const route = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});
