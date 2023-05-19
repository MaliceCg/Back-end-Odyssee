const Guide = require('../models/guide.model');

// Créer un guide
exports.createGuide = async (req, res) => {
  try {
    const { nom, prenom, numeroTelephone } = req.body;
    const guide = await Guide.create({ nom, prenom, numeroTelephone });
    res.status(201).json(guide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};

// Récupérer tous les guides
exports.getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};

// Récupérer un guide par son ID
exports.getGuideById = async (req, res) => {
  try {
    const guide = await Guide.findById(req.params.id);
    if (!guide) {
      return res.status(404).json({ msg: 'Guide non trouvé' });
    }
    res.json(guide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};

// Mettre à jour un guide
exports.updateGuide = async (req, res) => {
  try {
    const { nom, prenom, numeroTelephone } = req.body;
    const guide = await Guide.findByIdAndUpdate(req.params.id, { nom, prenom, numeroTelephone }, { new: true });
    if (!guide) {
      return res.status(404).json({ msg: 'Guide non trouvé' });
    }
    res.json(guide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};

// Supprimer un guide
exports.deleteGuide = async (req, res) => {
  try {
    const guide = await Guide.findByIdAndRemove(req.params.id);
    if (!guide) {
      return res.status(404).json({ msg: 'Guide non trouvé' });
    }
    res.json({ msg: 'Guide supprimé avec succès' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};
