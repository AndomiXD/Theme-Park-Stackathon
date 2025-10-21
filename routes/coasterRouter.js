const router = require("express").Router()
const controller = require("../controllers/coasterController")

router.get("/", controller.GetCoasters)
router.post("/", controller.CreateCoaster)
router.get("/:_id", controller.GetOneCoaster)
router.delete("/:_id", controller.DeleteCoaster)
router.post("/:_id", controller.AddReview)

// POST a review (comment + rating) for a specific coaster by ID
// Expects body: { comment: String, rating: Number }

module.exports = router
