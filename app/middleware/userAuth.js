const express = require("express");

const User = require("../models/users");

const saveUser = async (req, res, next) => {
  try {
    console.log("req.username", req.body.username);
    const username = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (username) return res.status(409).json({ message: "Username exists!" });
    next();
  } catch (error) {
    return res.status(409).json({ message: "Username exists!" });
  }
};

module.exports = {
  saveUser,
};
