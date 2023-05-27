const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guide.controllers');
const authMiddleware = require('../middlewares/auth.middleware');

// Créer un guide
router.post('/create', authMiddleware.verifyTokenAdmin, guideController.createGuide);

// Récupérer tous les guides
router.get('/', guideController.getAllGuides);

// Récupérer un guide par son ID
router.get('/:id', guideController.getGuideById);

// Mettre à jour un guide
router.put('/:id', authMiddleware.verifyTokenAdmin, guideController.updateGuide);

// Supprimer un guide
router.delete('/:id', authMiddleware.verifyTokenAdmin, guideController.deleteGuide);

module.exports = router;