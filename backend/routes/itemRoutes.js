const express = require('express');
const multer = require('multer');
const { addItem, getItems } = require('../controllers/itemController');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads')); 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'coverImage' }, { name: 'additionalImages' }]), addItem);
router.get('/', getItems);

module.exports = router;
