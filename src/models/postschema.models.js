import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: String,
  captions: String,
});

const postModel = mongoose.model("posts", postSchema);

export { postModel };
