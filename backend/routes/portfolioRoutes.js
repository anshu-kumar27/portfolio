const express = require('express');
const { feedbackSubmit, contactSubmit } = require('../controller/portfolioController');
const router = express.Router();

router.route('/feedback').post(feedbackSubmit)
router.route('/contact').post(contactSubmit)


module.exports = router;