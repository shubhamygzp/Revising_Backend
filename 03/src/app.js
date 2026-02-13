const express = require("express");
const noteModel = require("./models/note.models.js");

const app = express();
app.use(express.json()); /// Middleware

/*
       note = {
              title : "This is the title",
              description : "This is the description"
       }

*/

// ----------------------------------------------APIs-------------------------------------------------

// post /notes
app.post("/notes", async (req, res) => {
  const data = req.body;
  //  noteModel.create(data);    // This is not a right way to create a data
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created",
  });
});

// get  /notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // find always returns an array [{}, {}] or []  &  findOne returns an object {} or null

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// delete /notes/:id
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

// patch  /notes/:id
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findOneAndUpdate(      // findOneAndUpdate asks for two objects ->  kis ke basis par find krna hai,    kya update krna hai
    {
      _id: id,
    },
    {
      description: description,
    },
  );

  res.status(200).json({
    message: "Note updated successfully"
  })
});
module.exports = app;
