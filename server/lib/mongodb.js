// .server/lib/mongodb.js
const path = require("path");
const fs   = require("fs");
const { MongoClient } = require("mongodb");  // ✅ only once

// load the first .env file that exists
const envFiles = [".env.local", ".env.development.local", ".env.development", ".env"];
const envPath  = envFiles
    .map((f) => path.resolve(__dirname, "..", f))  // ✅ one level up to .server/
    .find((f) => fs.existsSync(f));

if (envPath) {
    require("dotenv").config({ path: envPath });
    console.log("Loaded env from:", envPath);
} else {
    console.warn("No .env file found");
}

const uri    = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) throw new Error("MONGODB_URI is not defined in .env");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

async function connectDB() {
    const connectedClient = await clientPromise;
    return connectedClient.db(dbName);
}

module.exports = { connectDB };