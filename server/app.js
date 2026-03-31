// .server/app.js
const path = require("path");
const fs   = require("fs");

const envFiles = [".env.local", ".env.development.local", ".env.development", ".env"];
const envPath  = envFiles
    .map((f) => path.resolve(__dirname, f))
    .find((f) => fs.existsSync(f));

if (envPath) {
    require("dotenv").config({ path: envPath });
    console.log("Loaded env from:", envPath);
} else {
    console.warn("No .env file found");
}

const cors       = require("cors");
var createError  = require("http-errors");
var express      = require("express");
var cookieParser = require("cookie-parser");
var logger       = require("morgan");
var { connectDB } = require("./config/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var songsRouter = require("./routes/songs");
// ✅ removed: playlistsRouter

var app = express();

const mongoose = require("mongoose");

connectDB().then(() => {
    console.log("DB ready — connection state:", mongoose.connection.readyState);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE","PATCH"],
    credentials: true
}));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/songs", songsRouter);
// ✅ removed: app.use("/api/playlists", playlistsRouter)

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error   = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;