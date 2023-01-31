const Router = require("express")
const router = new Router()

const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const {createBrand, getAllBrands, updateBrand, deleteBrand} = require("../controllers/brandController")


router.post("/", checkRoleMiddleware("ADMIN"), createBrand)
router.get("/", getAllBrands)
router.put("/:id", checkRoleMiddleware("ADMIN"), updateBrand)
router.delete("/:id", checkRoleMiddleware("ADMIN"), deleteBrand)

module.exports = router