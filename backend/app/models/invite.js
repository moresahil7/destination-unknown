const Sequelize = require("sequelize");
const db = require("../config/database");

const Invite = db.define(
  "invite",
  {
    invite_token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    invitee_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = Invite;
