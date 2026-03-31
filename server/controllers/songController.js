const Song = require('../models/SearchSongs');

const searchSongs = async (req, res) => {
    try {
        const query = req.query.q;
        console.log("Query received:", query); // log the query

        let results;
        if (!query || query.trim() === "") {
            results = await Song.find().limit(6); // first 20 songs
        } else {
            results = await Song.find({
                $or: [
                    { songTitle: { $regex: query, $options: "i" } },
                    { songArtist: { $regex: query, $options: "i" } }
                ]
            }).limit(20);
        }

        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch songs' });
    }
};

module.exports = { searchSongs };