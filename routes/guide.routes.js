const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guide.controllers');

// Créer un guide
router.post('/create', guideController.createGuide);

// Récupérer tous les guides
router.get('/', guideController.getAllGuides);

// Récupérer un guide par son ID
router.get('/:id', guideController.getGuideById);

// Mettre à jour un guide
router.put('/:id', guideController.updateGuide);

// Supprimer un guide
router.delete('/:id', guideController.deleteGuide);

module.exports = router;