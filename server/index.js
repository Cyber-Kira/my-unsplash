import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { images } from "./images.js";
const app = express();

// default options
app.use(cors());
app.use(express.json());

app.post("/upload", (req, res) => {
  images.unshift({
    id: uuidv4(),
    ...req.body,
  });

  res.send(images);
});

app.get("/gallery", (req, res) => {
  res.send(images);
});

app.delete("/delete", (req, res) => {
  const { id, password } = req.body;

  const foundImageIndex = images.findIndex((image) => image.id === id);
  const foundImage = images.find((image) => image.id === id);

  if (!foundImage) {
    res.send("No image was found");
    return;
  }

  if (password && password.length > 0) {
    images.splice(foundImageIndex, 1);
  }

  res.send(images);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));
