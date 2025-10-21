const mongoose = require("mongoose")
const coasterSchema = require("./coaster")

const Coaster = mongoose.model("Coaster", coasterSchema)

module.exports = {
  Coaster
}
