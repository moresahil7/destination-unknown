const User = require("../models/users");

const getuser = async (req, res) => {
  try {
    const ALL = await User.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getuser };
