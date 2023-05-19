const ExpModel = require('../models/exp.model.js');
const Destination = require('../models/dest.model');
//creer experiences
exports.createExp = async (req, res) => {
  try {
    const exp = new ExpModel(req.body);
    await exp.save();
    await Destination.updateMany({_id:exp.continent},{$push:{experiences:exp._id}})
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//modifier experience

exports.updateExp = async (req,res) => {
    try {
        const updatedExp = await ExpModel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedExp);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

};

// Supprimer une expérience
exports.deleteExp = async (req, res) => {
    try {
      const deletedExp = await ExpModel.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedExp);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // Récupérer toutes les expériences
exports.getAllExp = async (req, res) => {
    try {
      const exps = await ExpModel.find().populate({path:'continent',select:['continent']});
      res.status(200).json(exps);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
// Récupérer une expérience en particulier
exports.getExpById = async (req, res) => {
    try {
      const exp = await ExpModel.findById(req.params.id);
      if (!exp) {
        return res.status(404).json({ message: 'Expérience non trouvée' });
      }
      res.status(200).json(exp);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

