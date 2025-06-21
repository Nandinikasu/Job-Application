const express = require('express');
const router = express.Router();
const {
  submitApplication,
  getApplications,
  deleteApplication
} = require('../controllers/applicationController');

router.post('/apply', submitApplication);
router.get('/applications', getApplications);
router.delete('/applications/:id', deleteApplication);
module.exports = router;

