

const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ingredients:{
        type: [String],
        required: true
    },
    taste:{
        type: ["sweet", "sour", "salt"]
    }
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;