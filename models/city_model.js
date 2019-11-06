const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var citiesSchema = new Schema({
    name: String,
    country: String
});

module.exports = mongoose.model('City', citiesSchema);