const Sequelize = require("sequelize");
const db = require("../config/database");

const Questions = db.define(
  "questions",
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    country: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
      unique: true,
    },
    clues: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    fun_fact: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    trivia: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
  },
  { timestamps: true }
);

module.exports = Questions;
