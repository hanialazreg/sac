const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://hania:HHHAAA222TTT@trainning-ya2n4.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("you are connected know");
      //client object gives us acces to database
      callback(client);
    })
    .catch(err => {
      console.log("the errorrrrr", err);
    });
};
module.exports = mongoConnect;
