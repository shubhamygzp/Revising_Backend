const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
})


const noteModel = mongoose.model("note", noteSchema);   // this will helps us to perform CRUD operations very easily

module.exports = noteModel;