const userService = require("../service/user");
exports.signupUser = async (req, res) => {
  try {
    let user = await userService.createUser(req.body);
    return res.send(user);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};
