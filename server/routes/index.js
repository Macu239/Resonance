var express = require('express');
var router = express.Router();
const pageController = require('../controllers/pageController');
const postController = require('../controllers/postController');

/* GET home page. */
router.get('/', pageController.getHomePage);

/*router.get('/User_Profile', pageController.getUserProfile);

router.get('/Messages', pageController.getMessages);

router.get('/Play_List', pageController.getPlayList);

router.get('/Search', pageController.getSearch);

router.get('/Explore', pageController.getExplore);*/

router.post('/post', postController.createPost);


module.exports = router;
