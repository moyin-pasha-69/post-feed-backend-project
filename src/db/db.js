import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASS}@learn-db.aovb2f5.mongodb.net/PostsDB`,
    );

    console.log("DB connected ✅");
  } catch (error) {
    console.error(error);
  }
};

export { connectDB };
