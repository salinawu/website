const express = require('express');
const path = require('path');
global.XMLHttpRequest = require('xhr2');

const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/storage");
const admin = require('firebase-admin');


// FIREBASE 

const serviceAccount = require('./serviceAccountKey/personal-website-299903-53a2d6b9f331.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var firebaseConfig = {
    apiKey: "AIzaSyBj1wQ91b-l-to3VsYUY9rUzS2N8KmJInE",
    authDomain: "personal-website-f24ac.firebaseapp.com",
    projectId: "personal-website-f24ac",
    storageBucket: "personal-website-f24ac.appspot.com",
    messagingSenderId: "816070307476",
    appId: "1:816070307476:web:bb0f80d33a187197e44e81",
    measurementId: "G-W4GGMHZBNF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics(); // TODO why doesn't this work

var storage = firebase.storage();

// HELPERS

const getImages = (img, res) => {
    return img.items.map(function(itemRef) {
        return itemRef.getDownloadURL()
            .catch(function(error) {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/object-not-found':
                        throw new Error(`image does not exist at url ${url}`);
                        res.status(404).json(`image does not exist at url ${url}`);
                    break;
                
                    case 'storage/unauthorized':
                        throw new Error("user does not have authorization to access");
                        res.status(403).json("user does not have authorization to access");
                    break;
                
                    case 'storage/canceled':
                        throw new Error("user canceled image download");
                        res.status(404).json("user canceled image download");
                    break;
                    case 'storage/unknown':
                        throw new Error("unknown error occurred");
                        res.status(500).json("unknown error occurred");
                    break;
                }
            });
    });
};


// APP

const app = express(),  
    port = 3080;

app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/test/get', (req, res) => {
    console.log('/test/get called!!!!!!!!!')
    res.json(["hi"]);
});

app.get('/ceramics', (req, res) => {
    // Create a reference under which you want to list
    const listRef = storage.ref().child('ceramics');

    // Find all the prefixes and items.
    listRef.listAll().then(function(img) {
        // Get all images and resolve all promises together
        Promise.all(getImages(img, res)).then(images => {
            res.setHeader('Content-Type', 'application/json');
            res.send(images);
        });

    }).catch(function(error) {
        throw new Error('Could not get ceramics images');
        res.status(500).json("error: could not return ceramics images");
    });

    res.end;
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});