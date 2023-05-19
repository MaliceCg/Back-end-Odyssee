const Favoris = require('../models/fav.model');

// Ajoute une expérience aux favoris de l'utilisateur correspondant
exports.ajoutFavoris = async (req, res) => {
  const { userId, experienceId } = req.body;

  try {
    let favoris = await Favoris.findOne({ userId });

    // Si la collection "Favoris" pour l'utilisateur n'existe pas, la crée
    if (!favoris) {
      favoris = new Favoris({ userId, experiences: [] });
    }

    // Ajoute l'expérience aux favoris si elle n'a pas déjà été ajoutée
    if (!favoris.experiences.includes(experienceId)) {
      favoris.experiences.push(experienceId);
      await favoris.save();
    }

    res.status(200).json(favoris);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};

// Récupère tous les favoris de l'utilisateur correspondant
exports.getFavorisUtilisateur = async (req, res) => {
  const { userId } = req.params;

  try {
    const favoris = await Favoris.findOne({ userId }).populate('experiences');
    console.log(favoris);
    res.status(200).json(favoris);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};

// Supprime une expérience des favoris de l'utilisateur correspondant
exports.supprimerExperienceDesFavoris = async (req, res) => {
  const { userId, experienceId } = req.body;

  try {
    const favoris = await Favoris.findOne({ userId });

    if (!favoris) {
      return res.status(404).json({ msg: 'Favoris non trouvés' });
    }

    // Supprime l'expérience des favoris si elle y est présente
    if (favoris.experiences.includes(experienceId)) {
      favoris.experiences.pull(experienceId);
      await favoris.save();
    }

    res.status(200).json(favoris);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
};


