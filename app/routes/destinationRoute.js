const controller = require("../controllers/destinationController");
const mdlwr = require("../middleware/authMdlwr");

const router = require("express").Router();

router.get("/questions", mdlwr.authMiddleware, controller.getRandomDestination);

router.post("/questions/answers", mdlwr.authMiddleware, controller.postAnswer);
router.post("/invite/:id", mdlwr.authMiddleware, controller.createInviteLink);
router.get("/loginInvitee/:invitecode", controller.loginInvitee);
router.get(
  "/inviterDetails/:inviterId",
  mdlwr.authMiddleware,
  controller.getInviterScore
);

module.exports = router;
