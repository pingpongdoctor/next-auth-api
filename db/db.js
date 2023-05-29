const mongoose = require("mongoose");
const uri = process.env.MONGO_URI || "mongodb://localhost/test";

exports.connectDB = async function () {
  try {
    await mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(uri);
    console.log(conn.connection.host);
  } catch (e) {
    console.log(encodeURIComponent);
  }
};
