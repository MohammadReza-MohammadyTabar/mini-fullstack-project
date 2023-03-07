require("dotenv").config();
const connect = require("./db/connect");
const usersRoute = require("./routes/usersRoutes");
const error = require("./middleware/errors");
const express = require("express");

const app = express();
//defaults
app.use(express.urlencoded({ extended: false }), express.json());
app.use("/users", usersRoute);
app.use("*", error);
function start() {
  //listening on port
  app.listen(process.env.PORT, () => {
    console.log(`listen on port ${process.env.PORT}`);
  });
  connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
}
start();
