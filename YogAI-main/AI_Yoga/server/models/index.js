const mongoose = require("mongoose");

const PostSchema = require("./schemas/post");
const MemberSchema = require("./schemas/member");
const InfoSchema = require("./schemas/info");

exports.Info = mongoose.model('Info',InfoSchema);
exports.Daily = mongoose.model('Daily', PostSchema);
exports.Member = mongoose.model('Member', MemberSchema);

