const firebase = require("firebase/app");
require("firebase/storage");

const getImages = (img, res) => {
    return img.items.map(function(itemRef) {
        return itemRef.getDownloadURL()
            .catch((error) => (
                handleFirebaseStorageError(error, itemRef.fullPath, res)
            ));
    });
};

module.exports = async (req, res) => {
    // Create a reference under which you want to list
    const listRef = firebase.storage().ref().child("ceramics");
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
};