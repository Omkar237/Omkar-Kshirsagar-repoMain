const mongoose = require("mongoose");


const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter name!!!"]
    },

    email:{
        type: String,
        required: [true, "Please enter email!!!"]
    },

    password:{
        type: String,
        required: [true, "Please enter phone number"]
    },
},{
    timestamps:  true
})


module.exports = mongoose.model("Users", usersSchema)

