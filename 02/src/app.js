// Is file ka kaam hai server ko create karnaa

const express = require("express");

const app = express();
app.use(express.json()); // Middleware

/*

note = {
title : "My first note",
description: "This is my first note"
}

notes = [
{
title : "My first note",
description: "This is my first note"
},
{
title : "My second note",
description: "This is my second note"
}
];

*/

const notes = [];

/*

title, description

*/


// ---------------------------------------------APIs----------------------------------------------------------------------

// POST API,  /notes
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);

  res.status(201).json({ message: "Note created successfully" });
});

// GET API,  /notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// DELETE API,  /notes:index
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];

  res.status(200).json({
    message: "Note deleted successfully"
  })
});

// PATCH API,  /notes:index
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;

  notes[index].description = description;

  res.status(200).json({
    message: "Note updated successfully"
  })
});


module.exports = app;
