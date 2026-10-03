import { ImageKit } from "@imagekit/nodejs";
import "dotenv/config.js";

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  try {
    const res = await imageKit.files.upload({
      file: buffer.toString("base64"),
      fileName: "image.jpeg",
    });

    return res;
  } catch (error) {
    console.error(error);
  }
}

export { uploadFile };
