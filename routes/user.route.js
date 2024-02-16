const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const { upload } = require("../middlewares/multer");
const { restrict, authanticate } = require("../middlewares/auth");

const route = express.Router();
route.get(
  "/getprofile",
  upload.single(),
  authanticate,
  restrict(["user"]),
  userController.getUser
);
route.post(
  "/register",
  validate(userValidation.adduser),
  userController.addUser
);
route.post("/login", userController.loginUser);

module.exports = route;


