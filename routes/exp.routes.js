const express = require('express');
const router = express.Router();
const expControllers = require('../controllers/exp.controllers.js');

//creer une expérience
router.post('/create', expControllers.createExp);
// Mettre à jour une expérience
router.put('/:id', expControllers.updateExp);
// Supprimer une expérience
router.delete('/:id', expControllers.deleteExp);
// Récupérer toutes les expériences
router.get('/all', expControllers.getAllExp);
// Récupérer une expérience en particulier
router.get('/:id', expControllers.getExpById);
//


  

module.exports = router;