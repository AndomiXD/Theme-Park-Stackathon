const router = require("express").Router()
const controller = require("../controllers/coasterController")

router.get("/", controller.GetCoasters)
router.post("/", controller.CreateCoaster)

module.exports = router
