const express = require('express');
const router = express.Router();

const cityModel = require('./models/city_model');

router.post('/post', (req, res) => {
      console.log(req.body);
      const newCity = new cityModel(req.body)
      newCity.save()
      .then(result=>res.send(result))
      .catch(err=>console.log(err))
  });

router.get('/cities/all', (req, res) => {
    cityModel.find()
    .then(datos=>res.send(datos))
    .catch(err=>console.log(err))
  });

  module.exports = router;