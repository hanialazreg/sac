const mongoose = require("mongoose");
const { Schema } = mongoose;

const dimensionSchema = new Schema({
  reference: { type: String, required: true }
});

module.exports = mongoose.model("dimension", dimensionSchema);
