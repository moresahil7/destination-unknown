const Questions = require("../models/questions");
const Historical = require("../models/historical");
const Invite = require("../models/invite");
const Sequelize = require("sequelize");
const controller = require("./userController");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const getRandomDestination = async (req, res) => {
  try {
    const userId = req.user.id;

    const viewedDestinations = await Historical.findAll({
      where: { user_id: userId },
      attributes: ["question_id"],
    });

    const viewedDestinationIds = viewedDestinations.map(
      (entry) => entry.question_id
    );

    const randomDestination = await Questions.findOne({
      where: { id: { [Sequelize.Op.notIn]: viewedDestinationIds } },
      attributes: ["id", "city", "clues"],
      order: Sequelize.literal("RANDOM()"),
    });

    if (!randomDestination) {
      return res.status(404).json({ message: "No new destinations available" });
    }

    const randomCities = await Questions.findAll({
      attributes: ["city"],
      order: Sequelize.literal("RANDOM()"),
      limit: 3,
    });

    const destination = randomDestination.toJSON();
    const cityNames = randomCities.map((q) => q.get({ plain: true }).city);

    const shuffledCities = cityNames.sort(() => Math.random() - 0.5);

    const response = {
      ...destination,
      city: [destination?.city, ...shuffledCities],
    };

    await Historical.create({
      user_id: userId,
      question_id: destination.id,
      id: uuidv4(),
    });

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching random destination:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const postAnswer = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id: question_id, ans } = req.body;

    if (!ans || !question_id) {
      return res
        .status(400)
        .json({ message: "question_id and ans is required" });
    }

    const question = await Questions.findOne({ where: { id: question_id } });
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    const is_correct_ans = question.city === ans;

    const historyItem = await Historical.findOne({
      where: { question_id, user_id },
    });

    if (historyItem) {
      await Historical.update(
        {
          answer_given: ans,
          is_correct: is_correct_ans,
        },
        { where: { id: historyItem.id } }
      );
    } else {
      await Historical.create({
        id: uuidv4(),
        user_id,
        question_id,
        is_correct: is_correct_ans,
        answer_given: ans,
      });
    }

    return res
      .status(200)
      .json(
        is_correct_ans
          ? { fun_fact: question.fun_fact, message: "Success!" }
          : { message: "Failed!" }
      );
  } catch (error) {
    console.error("Error in postAnswer:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createInviteLink = async (req, res) => {
  const { username: inviteeUsername } = req.body;
  const inviteruserid = req.params.id;
  const FRONTEND_URL = process.env.FRONTEND_URL;
  const data = {
    username: inviteeUsername,
    password: await bcrypt.hash(uuidv4(), 10),
    id: uuidv4(),
  };

  const invitecode = uuidv4();
  const result = await controller.createUser(data);

  if (result.error) {
    return res.status(result.status).json({ message: result.error });
  }

  await Invite.create({
    invitee_id: invitecode,
    invite_token: result.token,
  });

  const inviteURL = `${FRONTEND_URL}/invite?inviterId=${inviteruserid}&invitecode=${invitecode}`;

  return res.status(200).json({ inviteURL });
};

const loginInvitee = async (req, res) => {
  const { invitecode } = req.params;
  const invite = await Invite.findOne({ where: { invitee_id: invitecode } });
  const token = invite.invite_token;
  if (!invite || !token) {
    return res.status(404).json({ message: "Invite not found" });
  }
  console.log("token", token, jwt);

  const a = jwt.verify(token, process.env.JWT_SECRET);
  console.log("a is ", a);

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Link Expired!" });
  }
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60,
  });
  return res.status(200).json({ id: decoded.id });
};

const getInviterScore = async (req, res) => {
  try {
    const { inviterId } = req.params;

    const inviterScore = await Historical.findAll({
      attributes: [
        "is_correct",
        [Sequelize.fn("COUNT", Sequelize.col("is_correct")), "count"],
      ],
      where: { user_id: inviterId },
      group: ["is_correct"],
    });

    return res.status(200).send({ inviterScore });
  } catch (error) {
    console.error("Error handling invite link:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getRandomDestination,
  postAnswer,
  createInviteLink,
  getInviterScore,
  loginInvitee,
};
