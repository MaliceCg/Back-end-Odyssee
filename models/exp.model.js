const mongoose = require('mongoose');


const expSchema = new mongoose.Schema(
  {
    nomexp: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
  
      trim: true
    },
    prix: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 55,
        
        trim: true
      },
      duree: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 55,
        
        trim: true
      },
      depart: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        
        trim: true
      },
      pays: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        
        trim: true
      },
      continent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
        required: true,

      },
      activites: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        
        trim: true
      },
      nbpers: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 55,
        
        trim: true
      }
    
  },
  {
    timestamps: true,
  }
);

const ExpModel = mongoose.model("ExpModel", expSchema);

module.exports = ExpModel;