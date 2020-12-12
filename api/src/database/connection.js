// databaseConnection.js
const mongoose = require("mongoose");
const connection = `mongodb://mongo:27017/${process.env.DATABASE_NAME}`;

const connectDb = () => {
  try {
    mongoose.connect(connection, { useNewUrlParser: true });
  } catch (error) {
    console.error("Database attachment failed: ", error);
  } finally {
    console.log("Database successfully attached ✅");
  }
};

module.exports = connectDb;
