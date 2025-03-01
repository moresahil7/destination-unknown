const Sequelize = require("sequelize");
const db = require("../config/database");

const Challenges = db.define(
  "challenges",
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
    },
    inviter_id: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    invitee_username: {
      type: Sequelize.STRING,
    },
    invite_code: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: true }
);

module.exports = Challenges;
