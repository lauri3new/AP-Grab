const express = require('express');
const path = require('path');
const Job = require('../models/job');

const router = express.Router();

router.use('/dev', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/dev.html'));
})

router.use('/api', (req, res) => {
  console.log('received punk');

  let newjob = new Job({
    id: 1,
    user: req.body.user,
    proteins: req.body.proteins,
    date: new Date()
  })
  newjob.save((error) => {
    if (error) {
      console.log('error mon');
        res.json('error mon');
    }
      res.json('herro pal');
  })
  // extract bait id and prey ids

  // save bait and prey ids in mongodb, call fetching script

  // respond to user with link to their results

})

module.exports = router;
