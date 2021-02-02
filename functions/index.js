const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const getResume = require("./utils/getResume");
const getCeramicsPhotos = require("./utils/getCeramicsPhotos");

global.XMLHttpRequest = require("xhr2");

require("firebase/analytics");

const app = express();

// TODO fix this
app.use(cors({origin: "*"}));

app.get("/api/resume", getResume);

app.get("/api/ceramics", getCeramicsPhotos);

exports.api = functions.https.onRequest(app);
