const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.warn(`mongoDb connected!: ${con.connection.host}`);
  } catch (err) {
    console.error("mongodb connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
