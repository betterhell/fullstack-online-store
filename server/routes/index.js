const Router = require("express");
const router = new Router();

const brandRouter = require("./brand.route");
const productRouter = require("./product.route");
const userRouter = require("./user.route");
const sliderRouter = require("./slider.route");

router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/slider", sliderRouter);
router.use("/product", productRouter);

module.exports = router;
