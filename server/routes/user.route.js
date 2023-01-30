const Router = require("express")
const router = new Router()

const {registration, login, checkAuth} = require("../controllers/userController")

router.post("/registration", registration)
router.post("/login", login)
router.get("/auth",  checkAuth)

module.exports = router