const mongoose = require("mongoose");





// This function connects server to the database, and it takes URI to connect
async function connectDB() {

    await mongoose.connect(process.env.MONGODB_URI)  // This connect server to database inside cluster, if DB is not present then it creates the DB

    console.log("Connected to DB");
}

module.exports = connectDB;