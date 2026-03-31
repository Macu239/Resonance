const express = require('express');
const router = express.Router();

router.post('/', async (req, res) =>{
    try{
        const { text, senderId } = req.body;
        console.log("Message received:", text);
        res.status(201).json({ message: "Sent!", data: text });
    }
    catch (err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;