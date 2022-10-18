const mongoose = require("mongoose");
const PostSchema = require("./schemas/post");
const UserSchema = require("./schemas/user");

exports.Daily = mongoose.model('Daily', PostSchema);
exports.User = mongoose.model('User', UserSchema);