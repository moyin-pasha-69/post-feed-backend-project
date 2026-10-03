import express from "express";
import { postModel } from "./models/postschema.models.js";
import multer from "multer";
import { uploadFile } from "./services/storage.services.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (req, res) => {
  res.send(`<h1>hello Bro!</h1>`);
});

// ! upload a post
app.post("/create-post", upload.single("image"), async (req, res) => {
  // ? change image to url
  const file = await uploadFile(req.file.buffer);

  // ? saves the data in database
  await postModel.create({
    image: file.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    statusCode: 201,
    message: "post created successfully!",
  });
});

// ! render the posts
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    message: "posts are..,",
    posts,
  });
});

export { app };
