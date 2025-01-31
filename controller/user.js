const userService = require("../service/user");
exports.signupUser = async (req, res) => {
  try {
    let user = await userService.createUser(req.body);
    return res.send({ token: user });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

exports.signinUser = async (req, res) => {
  try {
    let token = await userService.login(req.body);
    return res.send({ token: token });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  let { userId } = req.params;
  try {
    let user = await userService.updateUser(userId, req.body);
    return res.send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  let { userId } = req.params;
  try {
    let user = await userService.deleteUser(userId);
    return res.send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.getUSerById = async (req, res) => {
  const { userId } = req.params;
  try {
    let user = await userService.getUserById(userId);
    return res.send(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let users = await userService.getAllUsers();
    return res.send(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.usersByQuery = async (req, res) => {
  try {
    let users = await userService.findUserByQuery(req.query);
    return res.send(users);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};
