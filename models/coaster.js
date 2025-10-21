const { Schema } = require("mongoose")

const coasterSchema = new Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String },
    comment: { type: String },
    rating: { type: Number },
  },
  { timestamps: true }
)

module.exports = coasterSchema
