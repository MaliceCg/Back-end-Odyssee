const Usermodel = require('../models/user.model');
const fs = require('fs');
const { promisify}= require ('util');
const { uploadErrors } = require('../utils/errors.utils');
const pipeline = promisify(require('stream').pipeline);

module.exports.uploadProfil = async (req,res) => {
    try{
        if (req.file.detectedMimeType != "image/png" && req.file.detectedMimeType != "image/jpeg"&& req.file.detectedMimeType != "image/jpg")
        throw Error("pas bon format");

        if (req.file.size > 500000) throw Error("trop grand");
    }
    catch (err){
        const errors = uploadErrors(err)
        return res.status(201).json({errors });
        
        
    }

    // ecrase le fichier d'avant
    const filename = req.body.name + ".jpg";
    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${__dirname}/../client/uploads/${filename}`
        )
    )
};
