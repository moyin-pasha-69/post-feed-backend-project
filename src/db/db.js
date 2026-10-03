import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("DB connected ✅");
  } catch (error) {
    console.error(error);
  }
};

export { connectDB };
