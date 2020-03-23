const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  provider: { type: Schema.Types.ObjectId, ref: "provider" },
  file: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "category" },
  dimension: { type: String }
});

module.exports = mongoose.model("product", productSchema);
