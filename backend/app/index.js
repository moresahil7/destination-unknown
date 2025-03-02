const express = require("express");

const sequelize = require("../app/config/database");

const authRouter = require("./routes/userController");
const destRouter = require("./routes/destinationRoute");

const cors = require("cors");

const Questions = require("./models/questions");
const Historical = require("./models/historical");
const Challenges = require("./models/challenges");

const app = express();
const port = process.env.PORT || 3001;
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth/", authRouter);
app.use("/api/", destRouter);

(async () => {
  await sequelize.sync({ force: false });
  app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
  });
})();
