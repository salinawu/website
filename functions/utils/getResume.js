const firebase = require("firebase/app");
require("firebase/storage");

const firebase_config = require("./firebase_config");

firebase.initializeApp(firebase_config);

module.exports = async (req, res) => {
    try {
        const resumeRef = firebase.storage().ref().child("resume/salinawu_resume.pdf");
        res.setHeader("Access-Control-Allow-Origin", "*");

        resumeRef.getDownloadURL()
            .then(function(url) {
                res.setHeader("Content-Type", "text/html");
                res.send(url);
            })
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };