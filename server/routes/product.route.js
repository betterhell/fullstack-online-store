const Router = require("express")
const router = new Router()

const {createProduct, getProduct, getAllProducts} = require("../controllers/productController")

router.post("/", createProduct)
router.get("/:id", getProduct)
router.get("/", getAllProducts)

module.exports = router