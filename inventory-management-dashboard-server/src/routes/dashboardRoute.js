const express = require('express');  
const { getDashboardMetrics } = require('../controllers/dashboardController');

const router = express.Router(); 

router.get("/", getDashboardMetrics);

module.exports = router; 