const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    imgURL1: { type: String, required: false },
    imgURL2: { type: String, required: false },
    imgURL3: { type: String, required: false },
    description: { type: String, required: true },
    price: {type: String, required: true}
  },
  {timestamps: true}
)

module.exports = mongoose.model('products', Product)