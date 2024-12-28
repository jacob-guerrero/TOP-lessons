const { Router } = require("express");
const usersController = require("../controllers/usersController.js");
const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);
usersRouter.get("/new", usersController.createUsernameGet);
usersRouter.post("/new", usersController.createUsernamePost);
usersRouter.get("/delete", usersController.deleteUsernames);

module.exports = usersRouter;
