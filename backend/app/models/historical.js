const Sequelize = require("sequelize");
const db = require("../config/database");

const Historical = db.define(
  "historical",
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
    is_correct: {
      type: Sequelize.BOOLEAN,
    },
  },
  { timestamps: true }
);

module.exports = Historical;
