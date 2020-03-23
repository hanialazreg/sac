const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    return (conn = mongoose.connect(
      "mongodb+srv://hania:HHHAAA222TTT@trainning-ya2n4.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ));
    console.log(`Mongo is Connected`);
  } catch (error) {
    console.log(`Error ${e.message}`);
  }
};

module.exports = connectDB;
