const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { v4: uuidv4 } = require("uuid");

const createUser = async (data) => {
  try {
    const user = await User.create(data);

    if (!user) {
      return { error: "Details are not correct", status: 409 };
    }

    // Generate token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // or 86400 (seconds)
    });

    return { user, token };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Internal server error", status: 500 };
  }
};

const signup = async (req, res) => {
  console.log(req.body, " req.body");
  const { username, password } = req.body;
  const data = {
    username,
    password: await bcrypt.hash(password, 10),
    id: uuidv4(),
  };
  const result = await createUser(data);

  if (result.error) {
    return res.status(result.status).json({ message: result.error });
  }

  // Set cookie with JWT
  res.cookie("jwt", result.token, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  });

  return res.status(201).json({ user: result.user, token: result.token });
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });
    const isValidUser = await bcrypt.compare(password, user.password);
    if (!isValidUser) {
      return res.status(404).send({ msg: "Wrong Password!" });
    }
    if (isValidUser) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 1000,
      });
      res.cookie("jwt", token, { maxAge: 60 * 60 * 1000, httpOnly: true });
      return res.status(201).send({ user, token });
    } else {
      return res.status(404).send({ msg: "No User found!" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  signin,
  createUser,
};
