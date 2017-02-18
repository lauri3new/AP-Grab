const express = require('express');
const path = require('path');

const router = express.Router();
// v1 routes
router.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
