const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const cors = require('cors');

global.XMLHttpRequest = require("xhr2");

const firebase = require("firebase/app");
require("firebase/storage");
require("firebase/analytics");

const admin = require("firebase-admin");
const allowedDomains = [
    "http://salinawu.com",
    "http://localhost:3080",
    "http://localhost:5000",
    "https://us-central1-personal-website-f24ac.cloudfunctions.net/",
];

admin.initializeApp(functions.config().firebase);

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBj1wQ91b-l-to3VsYUY9rUzS2N8KmJInE",
    authDomain: "personal-website-f24ac.firebaseapp.com",
    projectId: "personal-website-f24ac",
    storageBucket: "personal-website-f24ac.appspot.com",
    messagingSenderId: "816070307476",
    appId: "1:816070307476:web:bb0f80d33a187197e44e81",
    measurementId: "G-W4GGMHZBNF",
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
// firebase.analytics(); // TODO why doesn't this work

const storage = firebase.storage();

// HELPERS

const handleFirebaseStorageError = (error, fullPath, res) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
    case "storage/object-not-found":
        res.status(404).json(`image does not exist at path ${fullPath}`);
        throw new Error(`image does not exist at path ${fullPath}`);

    case "storage/unauthorized":
        res.status(403).json("user does not have authorization to access");
        throw new Error("user does not have authorization to access");

    case "storage/canceled":
        res.status(404).json("user canceled object retrieval");
        throw new Error("user canceled object retrieval");

    case "storage/unknown":
        res.status(500).json("unknown error occurred");
        throw new Error("unknown error occurred");
    }
};

const getImages = (img, res) => {
    return img.items.map(function(itemRef) {
        return itemRef.getDownloadURL()
            .catch((error) => (
                handleFirebaseStorageError(error, itemRef.fullPath, res)
            ));
    });
};


// APP

const app = express();

console.log("starting app!!! ");

// app.use(cors({
//     origin: function(origin, callback) {
//         // bypass the requests with no origin
//         // (like curl requests, mobile apps, etc )
//         if (!origin) return callback(null, true);

//         if (allowedDomains.indexOf(origin) === -1) {
//             const msg = `This site ${origin} does not have an access. 
//                 Only specific domains are allowed to access it.`;
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     },
// }));

app.use(cors({ origin: "*" }));

console.log("here");

app.use(express.static(path.join(__dirname, "../app/build")));

console.log("there");

app.get("/resume", (req, res) => {
    console.log("I AM HERE first");
    const resumeRef = storage.ref().child("resume/salinawu_resume.pdf");
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("I AM HERE");
    console.log("res._headers >>>>>>>" + JSON.stringify(res._headers));

    resumeRef.getDownloadURL()
        .then(function(url) {
            res.setHeader("Content-Type", "text/html");
            res.send(url);
        }).catch((error) => (
            handleFirebaseStorageError(error, resumeRef.fullPath, res))
        );
});

app.get("/ceramics", cors({ origin: true }), (req, res) => {
    // Create a reference under which you want to list
    const listRef = storage.ref().child("ceramics");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Find all the prefixes and items.
    listRef.listAll().then(function(img) {
        // Get all images and resolve all promises together
        Promise.all(getImages(img, res)).then((images) => {
            res.setHeader("Content-Type", "application/json");
            res.send(images);
        });
    }).catch(function(error) {
        res.status(500).json(`error: could not return 
            ceramics images due to error ${error}`);
        throw new Error(`Could not get ceramics images due to error: ${error}`);
    });

    res.end;
});

exports.app = functions.https.onRequest(app);
