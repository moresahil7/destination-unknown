const controller = require("../controllers/userController");
const router = require("express").Router();

const userAuth = require("../middleware/userAuth");

router.post("/signup", userAuth.saveUser, controller.signup);
router.post("/signin", controller.signin);

module.exports = router;
