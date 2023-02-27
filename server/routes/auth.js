const express = require("express");
const router = express.Router();
const { registration, login, getUsers } = require("./../controllers/auth");
const { check } = require("express-validator");
const authMiddleware = require('./../middleware/authMiddleware')
const roleMiddleware = require('./../middleware/roleMiddleware')

router.post("/registration", [
    check('username', 'username can not be empty').notEmpty(),
    check('password','password should be more than 4 and less than 10 symbols').isLength({min:4,max:10})
], registration);
router.post("/login", login);
router.get("/users", roleMiddleware(['USER']), getUsers);

module.exports = router;
