const express = require('express');
const router = express.Router();
const destControllers = require('../controllers/dest.controllers.js');

// Récupérer toutes les destinations
router.get('/all', destControllers.getAllDest);
router.get('/prixmoinscherEurope', destControllers.findCheapestExperiencePriceEurope);
router.get('/prixmoinscherAsie', destControllers.findCheapestExperiencePriceAsie);
router.get('/prixmoinscherAmerique', destControllers.findCheapestExperiencePriceAmerique);
router.get('/prixmoinscherAfrique', destControllers.findCheapestExperiencePriceAfrique);
router.get('/prixmoinscherOceanie', destControllers.findCheapestExperiencePriceOceanie);
router.get('/all/:id', destControllers.getAllExpByContinent);
module.exports = router;