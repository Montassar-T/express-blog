const express = require("express");
const app = express();
const cors = require("cors");
const allowedCors = require("./congif/allowedCors");
const path = require("path");
const connectDB = require("./congif/connect");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4200;
app.use(express.json());

connectDB();

app.use(cors(allowedCors));

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", require("./routes/root"));
app.use("/users", require("./routes/usersRoutes"));
/* app.use(require('./utils/verifyJWT')) */
app.use("/posts", require("./routes/postsRoutes"));

mongoose.connection.once("open", () => {
  console.log("connected to db");
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
