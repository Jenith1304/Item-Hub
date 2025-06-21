const multer = require('multer');
const { storage } = require('../config/cloudinary'); // ✅ import cloudinary storage
const upload = multer({ storage }); // ✅ use cloudinary storage

const express = require('express');
const router = express.Router();
const { addItem, getItems } = require('../controllers/itemController');

router.post(
  '/',
  upload.fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'additionalImages', maxCount: 5 },
  ]),
  addItem
);

router.get('/', getItems);

module.exports = router;
