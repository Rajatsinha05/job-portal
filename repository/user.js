const User = require("../model/user");

exports.register = async (data) => {
  let user = await User.create(data);
  return user;
};

exports.getUserByEmail = async (email) => {
  let user = await User.findOne({ email: email });
  return user;
};

exports.getUserById = async (id) => {
  let user = await User.findById(id);
  return user;
};

exports.updateUser = async (user, id) => {
  let user = await User.findByIdAndUpdate(id, user, { new: true });
  return user;
};

exports.deleteUser = async (id) => {
  let user = await User.findByIdAndDelete(id);
  return user;
};
exports.getUsers = async () => {
  let users = await User.find();
  return users;
};

exports.getUserByQuery = async (query) => {
  let user = await User.find(query);
  return user;
};
