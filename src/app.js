import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>hello Bro!</h1>`);
});

export { app };
