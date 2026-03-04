var express = require('express');
var router = express.Router();

// Import the controller functions we are about to make
var { getUsers, createUser } = require('../controllers/userController');

/* GET /users - Fetch all users from DB */
router.get('/', getUsers);

/* POST /users - Add a new user to DB */
router.post('/', createUser);

module.exports = router;