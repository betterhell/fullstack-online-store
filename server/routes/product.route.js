const Router = require("express")
const router = new Router()

const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct} = require("../controllers/productController")

router.post("/", checkRoleMiddleware("ADMIN"), createProduct)
router.get("/:id", getProduct)
router.get("/", getAllProducts)
router.put("/:id", checkRoleMiddleware("ADMIN"), updateProduct)
router.delete("/:id", checkRoleMiddleware("ADMIN"), deleteProduct)

module.exports = router