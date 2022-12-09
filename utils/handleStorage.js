const multer = require('multer');
const express = require('express');
const router = express.Router();

const storage = multer.diskStorage({
    /* Configuraciones obligatorias */
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.').pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    }
});

const uploadMiddleware = multer({storage:storage});

module.exports = uploadMiddleware;