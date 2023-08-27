const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
  cloud_name: "dj8foozva",
  api_key: "332787216499285",
  api_secret: "fmPaTdoJIDca2UZw9I2eQO-Pkas",
});

const cloudUpload = async (req) => {
  try {
    //file path
    const filePath = path.join(
      __dirname,
      "../public/",
      req?.file?.originalname
    );

    // write file sync
    fs.writeFileSync(filePath, req.file.buffer);

    //file updated
    const data = await cloudinary.uploader.upload(filePath);

    // Deleting the local file after uploading to Cloudinary
    fs.unlinkSync(filePath);

    //return file data
    return data ? data?.secure_url : null;
  } catch (error) {
    console.log(error);
  }
};

// export cloud upload
module.exports = cloudUpload;
