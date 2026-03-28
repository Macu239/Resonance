const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("No MongoDB URI found");
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(uri, {
            tls: true,                    
            tlsAllowInvalidCertificates: false,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB };