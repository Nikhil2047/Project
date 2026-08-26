const router = require("express").Router();
const signupHandler = require("../controllers/SignupController");
const loginHandler = require("../controllers/LoginController");

router.post("/register",signupHandler);

router.post("/login",loginHandler);

module.exports = router