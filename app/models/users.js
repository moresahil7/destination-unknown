const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "users",
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = User;
