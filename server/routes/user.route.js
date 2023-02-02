const Router = require("express")
const router = new Router()

const authMiddleware = require("../middleware/AuthMiddleware")
const {registration, login, checkAuth} = require("../controllers/userController")

router.post("/registration", registration)
router.post("/login", login)
router.get("/auth", authMiddleware, checkAuth)

module.exports = router