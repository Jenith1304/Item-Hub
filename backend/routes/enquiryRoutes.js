const express = require('express');
const { sendEnquiry } = require('../controllers/enquiryController');
const router = express.Router();

router.post('/', sendEnquiry);

module.exports = router;
