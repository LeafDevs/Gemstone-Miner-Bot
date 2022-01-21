const mongoose = require("mongoose")

const profileScheme = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: false
    },
    Username: {
        type: String,
        required: true,
        unique: false
    }
})


const model = mongoose.model("ProfileModels", profileScheme);

module.exports = model;