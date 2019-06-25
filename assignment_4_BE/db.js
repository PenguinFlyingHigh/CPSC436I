const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL =
  "mongodb+srv://m001-student:m001-mongodb-basics@cpsc436i-mongodb-drd29.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Messages";
let mongodb;

connect = () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      mongodb = client.db(DATABASE_NAME);
      console.log("Connected to " + DATABASE_NAME + "!");
    }
  );
};

get = () => {
  return mongodb;
};

close = () => {
  mongodb.close();
};

module.exports = {
  connect,
  get,
  close
};
