const userRepository = require("../repository/user");
const { hashPassword, genereateToken, compare } = require("../utils/helper");
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

exports.login = async (data) => {
  let user = await userRepository.getUserByEmail(data.email);
  if (!user) {
    throw new Error("User not exists");
  }
  let isMatch = await compare(user.password, data.password);
  if (!isMatch) {
    throw new Error("invalid password");
  }
  let token = await genereateToken({
    email: user.email,
    id: user.id,
    role: user.role,
    name: user.name,
  });

  return token;
};

exports.updateUser = async (id, data) => {
  let user = await userRepository.getUserById(id);
 

  if (!user) {
    throw new Error("invalid id");
  }
  user = await userRepository.updateUser(id, data);
  return user;
};

exports.deleteUser = async (id) => {
  let user = await userRepository.getUserById(id);
  if (!user) {
    throw new Error("invalid id");
  }
  user = await userRepository.deleteUser(id);
  return user;
};

exports.getUserById = async (id) => {
  let user = await userRepository.getUserById(id);
  if (!user) {
    throw new Error("invalid id");
  }
  return user;
};

exports.findUserByQuery = async (query) => {
  let user = await userRepository.getUserByQuery(query);
  return user;
};

exports.getAllUSer = async () => {
  let users = await userRepository.getUsers();
  return users;
};
