const router = require("express").Router()
const controller = require("../controllers/coasterController")

router.get("/", controller.GetCoasters)
router.post("/", controller.CreateCoaster)
router.get("/:_id", controller.GetOneCoaster)

module.exports = router
