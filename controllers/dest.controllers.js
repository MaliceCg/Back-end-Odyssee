const ExpModel = require('../models/exp.model');
const Destination = require('../models/dest.model');

exports.getAllDest = async (req, res) => {
    try {
      const dest = await Destination.find().populate({path:'experiences',select:['prix']});
      res.status(200).json(dest);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.findCheapestExperiencePriceEurope = async  (req, res) => {
    try {
      const continent = 'Europe';
  
      // Trouver l'ID du continent Europe
      const europe = await Destination.findOne({ continent });
  console.log(europe)
      // Trouver toutes les expériences liées au continent Europe
      const experiences = await ExpModel.find({ continent: europe._id });
  console.log(experiences)
      // Trier les expériences par prix croissant
      experiences.sort((a, b) => parseInt(a.prix) - parseInt(b.prix));
console.log('reussi')
      // Retourner le prix de la première expérience (la moins chère)
      if (experiences.length > 0) {
        res.status(200).json({prix : experiences[0].prix, duree : experiences[0].duree});
        console.log(experiences[0].duree)
        
      } else {
        return 'Aucune expérience disponible sur le continent européen.';
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    }
  }
  exports.findCheapestExperiencePriceAsie = async  (req, res) => {
    try {
      const continent = 'Asie';
  
      // Trouver l'ID du continent asie
      const asie = await Destination.findOne({ continent });
  console.log(asie)
      // Trouver toutes les expériences liées au continent asie
      const experiences = await ExpModel.find({ continent: asie._id });
  console.log(experiences)
      // Trier les expériences par prix croissant
      experiences.sort((a, b) => parseInt(a.prix) - parseInt(b.prix));
console.log('reussi')
      // Retourner le prix de la première expérience (la moins chère)
      if (experiences.length > 0) {
        res.status(200).json({prix : experiences[0].prix, duree : experiences[0].duree});
        
      } else {
        return 'Aucune expérience disponible sur le continent asiatique.';
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    }
  }
  exports.findCheapestExperiencePriceAfrique = async  (req, res) => {
    try {
      const continent = 'Afrique';
  
      // Trouver l'ID du continent Afrique
      const afrique = await Destination.findOne({ continent });

      // Trouver toutes les expériences liées au continent afrique
      const experiences = await ExpModel.find({ continent: afrique._id });
  console.log(experiences)
      // Trier les expériences par prix croissant
      experiences.sort((a, b) => parseInt(a.prix) - parseInt(b.prix));
console.log('reussi')
      // Retourner le prix de la première expérience (la moins chère)
      if (experiences.length > 0) {
        res.status(200).json({prix : experiences[0].prix, duree : experiences[0].duree});
        
      } else {
        return 'Aucune expérience disponible sur le continent africain.';
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    }
  }
  exports.findCheapestExperiencePriceAmerique = async  (req, res) => {
    try {
      const continent = 'Amerique';
  
      // Trouver l'ID du continent ameriqu
      const amerique = await Destination.findOne({ continent });

      // Trouver toutes les expériences liées au continent Europe
      const experiences = await ExpModel.find({ continent: amerique._id });
  console.log(experiences)
      // Trier les expériences par prix croissant
      experiences.sort((a, b) => parseInt(a.prix) - parseInt(b.prix));
console.log('reussi')
      // Retourner le prix de la première expérience (la moins chère)
      if (experiences.length > 0) {
        res.status(200).json({prix : experiences[0].prix, duree : experiences[0].duree});
        
      } else {
        return 'Aucune expérience disponible sur le continent américain.';
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    }
  }
  exports.findCheapestExperiencePriceOceanie = async  (req, res) => {
    try {
      const continent = 'Oceanie';
  
      // Trouver l'ID du continent Oceanie
      const oceanie = await Destination.findOne({ continent });
  console.log(oceanie)
      // Trouver toutes les expériences liées au continent oceanie
      const experiences = await ExpModel.find({ continent: oceanie._id });
  console.log(experiences)
      // Trier les expériences par prix croissant
      experiences.sort((a, b) => parseInt(a.prix) - parseInt(b.prix));
console.log('reussi')
      // Retourner le prix de la première expérience (la moins chère)
      if (experiences.length > 0) {
        res.status(200).json({prix : experiences[0].prix, duree : experiences[0].duree});
        
        
      } else {
        return 'Aucune expérience disponible sur le continent océanique.';
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    }
  }
  

  // Récupérer toutes les expériences d'un continent
exports.getAllExpByContinent = async (req, res) => {
  try {
    const exps = await ExpModel.find({ continent: req.params.id });
    res.status(200).json(exps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
