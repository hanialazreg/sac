const mongoose = require("mongoose");
const { Schema } = mongoose;

const providerSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String }
});

module.exports = mongoose.model("Provider", providerSchema);
