const express = require('express');
const router = express.Router();
const favControllers = require('../controllers/fav.controllers.js');

// Ajoute une expérience aux favoris de l'utilisateur correspondant
router.post('/favoris', favControllers.ajoutFavoris);
// Supprimer un favori
router.delete('/', favControllers.supprimerExperienceDesFavoris);
// Récupère tous les favoris de l'utilisateur correspondant
router.get('/:userId', favControllers.getFavorisUtilisateur);




module.exports = router;