const mongoose = require("mongoose");

const PostSchema = require("./schemas/post");
const MemberSchema = require("./schemas/member");

exports.Daily = mongoose.model('Daily', PostSchema);
exports.Member = mongoose.model('Member', MemberSchema);

