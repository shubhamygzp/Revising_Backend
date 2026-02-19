const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { userName, email, password } = req.body;
    
    const ifUserAlreadyExists = await userModel.findOne({
        email
    });

    if(!ifUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const user = await userMode.create({
        userName, email, password
    });


    return res.status().json();
}

module.exports = { registerUser };
