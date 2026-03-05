var express = require('express');
var router = express.Router();
const pageController = require('../controllers/pageController');

/* GET home page. */
router.get('/', pageController.getHomePage);

router.get('/User_Profile', pageController.getUserProfile);

router.get('/Messages', pageController.getMessages);

router.get('/Play_List', pageController.getPlayList);

router.get('/Search', pageController.getSearch);

router.get('/Explore', pageController.getExplore);

module.exports = router;
