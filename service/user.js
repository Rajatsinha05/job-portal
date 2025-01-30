const userRepository = require("../repository/user");
const { hashPassword, genereateToken } = require("../utils/helper");
exports.createUser = async (data) => {
  let user = await userRepository.getUserByEmail(data.email);
  if (user) {
    throw new Error("User already exists");
  }
  let hash = await hashPassword(data.password);
  data.password = hash;
  user = await userRepository.register(data);

  let token = await genereateToken({
    email: user.email,
    id: user.id,
    role: user.role,
    name: user.name,
  });

  return token;
};
