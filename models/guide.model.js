const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  numeroTelephone: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return /^\d{10}$/.test(value);
      },
      message: 'Le numéro de téléphone doit comporter 10 chiffres'
    }
  }
});

const Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;

