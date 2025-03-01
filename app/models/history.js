const Sequelize = require("sequelize");
const db = require("../config/database");

const History = db.define(
  "history",
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    user_id: {
      type: Sequelize.UUID,
    },
    question_id: {
      type: Sequelize.UUID,
    },
    answer_given: {
      type: Sequelize.STRING,
    },
    correct_answers: {
      type: Sequelize.NUMBER,
      defaultValue: 0,
    },
    incorrect_answers: {
      type: Sequelize.NUMBER,
      defaultValue: 0,
    },
    is_correct: {
      type: Sequelize.BOOLEAN,
    },
  },
  { timestamps: true }
);

module.exports = History;
