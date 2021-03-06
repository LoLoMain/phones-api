const express = require('express');
const router = express.Router();

const Phone = require('../models/phonemodel');

/* GET Phones listing. */
router.get('/phones', (req, res, next) => {
  //this is what differs between regular
  Phone.find((err, phonesList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(phonesList);
  });
});


router.post('/phones', (req, res, next) => {
  const thePhone = new Phone({
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image || ''
  });

  thePhone.save((err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'New Phone created!',
      id: thePhone._id
    });
  });
});

module.exports = router;
