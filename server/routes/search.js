var express = require('express');
var router = express.Router();

var { searchSongs } = require('../controllers/songController');

router.get("/", searchSongs);

module.exports = router;