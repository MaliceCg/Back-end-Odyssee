const mongoose = require('mongoose');
const ExpModel = require('../models/exp.model');

const destinationSchema = new mongoose.Schema({
  continent: {
    type: String,
    required: true
  },
  pays: [{
    type: String,
    required: true
  }],
  experiences : [{type: mongoose.Schema.Types.ObjectId, ref: 'ExpModel'}]
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;