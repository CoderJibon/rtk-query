const multer = require("multer");

// multer memory storage
const storage = multer.memoryStorage();

// multer brand photo
const brandPhoto = multer({ storage: storage }).single("photo");

//export
module.exports = { brandPhoto };
