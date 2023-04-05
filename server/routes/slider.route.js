const Router = require("express");
const router = new Router();

const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const {
  createSlide,
  getAllSlide,
  updateSlide,
  deleteSlide,
} = require("../controllers/sliderController");

router.post("/", createSlide);
router.get("/", getAllSlide);
router.put("/:id", checkRoleMiddleware("ADMIN"), updateSlide);
router.delete("/:id", checkRoleMiddleware("ADMIN"), deleteSlide);

module.exports = router;
