const mongoose = require("mongoose");
const CharacterSchema = new mongoose.Schema({
    name: String,
    age: Number,
    rank: String
});

const Character = new mongoose.model("nazwaprobna", CharacterSchema);

module.exports = Character;