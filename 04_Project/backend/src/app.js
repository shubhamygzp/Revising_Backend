const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service.js");
const postModel = require("./models/post.model.js");


const app = express();
app.use(express.json()); // middleware for reading raw data sent to server from client

const upload = multer({ storage: multer.memoryStorage() });    // 


// -------------------------------------APIs------------------------------------

// post  /create-post
app.post("/create-post", upload.single("image"), async (req, res) => {
//   console.log(req.body);
//   console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "Post created successfully",
    post
  })
});

// get  /posts
app.get("/posts", async (req, res) => {
    const posts = await postModel.find();

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
});

module.exports = app;
