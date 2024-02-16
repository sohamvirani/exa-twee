const { tweetSchema } = require("../models");

const gettweet = () => {
  return tweetSchema.find().populate("user,admin");
};
const addtweet = (body) => {
  return tweetSchema.create(body);
};
const findtweet = (email) => {
  return tweetSchema.findOne({ email: email });
};
const gettweetByemail = (email) => {
  return tweetSchema.findOne({ email });
};
const updatetweet = (id, body) => {
  return tweetSchema.findByIdAndUpdate(id, { $set: body });
};
const deletetweet = (id) => {
  return tweetSchema.findByIdAndDelete(id);
};
module.exports = { addtweet, findtweet, gettweet, gettweetByemail, updatetweet, deletetweet };
