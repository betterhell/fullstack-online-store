const Router = require("express");
const router = new Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const {
  registration,
  login,
  checkAuth,
} = require("../controllers/userController");

router.post("/sign-up", registration);
router.post("/sign-in", login);
router.get("/auth", authMiddleware, checkAuth);

module.exports = router;
