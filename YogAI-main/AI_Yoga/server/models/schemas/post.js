// DB 에 데이터가 쌓이는 구조
// routes / post.js == models / post.js
const { Schema } = require("mongoose");
const shortId = require('./types/short-id');
module.exports = new Schema({
    shortId,
    title: String,
    content: String,
    url: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "Member",
        required: true
    },
}, {
    timestamps: true,
});
