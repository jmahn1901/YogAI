const { Schema } = require("mongoose");
const shortId = require("./types/short-id");

module.exports = new Schema({
    shortId,
    email: String,
    password: String,
    nickname: String
}, {
    timestamps: true
});