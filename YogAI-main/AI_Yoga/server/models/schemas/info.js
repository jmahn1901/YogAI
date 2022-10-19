const { Schema } = require("mongoose");

module.exports = new Schema({
    num : Number,
    type : String,
    name: String,
    yogaContent : String,
    yogaEffect : String,
    yogaWarning : String,
    yogaImg : String
}, {
    timestamps: true
});