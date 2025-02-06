const { Router } = require("express");
const userController = require("../controller/user");
const Ability = require("../middleware/Ability");
const routes = Router();
routes.post("/signup", userController.signupUser);
routes.post("/login", userController.signinUser);
routes.patch("/:userId", userController.updateUser);
routes.delete("/:userId", userController.deleteUser);
routes.get("/info/:userId", userController.getUSerById);
routes.get("/", Ability(["ADMIN"]), userController.usersByQuery);

module.exports = routes;
