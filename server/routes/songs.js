const express= require("express");
const router= express.Router();
const { connectDB } = require("../lib/mongodb");

router.get("/", async (req, res) => {
    try {
        const db = await connectDB();
        const songs = await db
            .collection("songs")
            .find({})
            .toArray();

        const mapped = songs.map((song) => ({
            ...song,
            id: song._id.toString(),
        }));

        res.json({ songs: mapped });

    } catch (error) {
        console.error("Error fetching songs:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;