const mongoose = require('mongoose');


const favSchema = new mongoose.Schema(
  {
   
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true,
      },
      experiences : [{type: mongoose.Schema.Types.ObjectId, ref: 'ExpModel'}]
    
  },
  {
    timestamps: true,
  }
);

const Favoris = mongoose.model("favoris", favSchema);

module.exports = Favoris;