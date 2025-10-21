const { Schema } = require("mongoose")

const coasterSchema = new Schema(
  {
    name: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String },
    reviews: [
      {
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
)

module.exports = coasterSchema
