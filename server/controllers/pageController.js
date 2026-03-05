exports.getHomePage = (req, res) => {
    res.render('index', { title: 'Home Page' });
}

exports.getUserProfile = (req, res) => {
    res.render('user_profile', { title: 'User Profile' });
}

exports.getMessages = (req, res) => {
    res.render('messages', { title: 'Messages' });
}

exports.getPlayList = (req, res) => {
    res.render('play_list', { title: 'Play List' });
}

exports.getSearch = (req, res) => {
    res.render('search', { title: 'Search' });
}  

exports.getExplore = (req, res) => {
    res.render('explore', { title: 'Explore' });
}