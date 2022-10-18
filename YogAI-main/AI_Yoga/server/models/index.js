const mongoose = require("mongoose");
const MemberSchema = require("./schemas/member");

exports.Member = mongoose.model('Member', MemberSchema);