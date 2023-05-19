const Experience = require('../models/exp.model');
const Destination = require('../models/dest.model');

  const europe = new Destination({
  continent: 'Europe',
  pays: [
    "Albanie",
    "Allemagne",
    "Andorre",
    "Autriche",
    "Belgique",
    "Biélorussie",
    "Bosnie-Herzégovine",
    "Bulgarie",
    "Chypre",
    "Croatie",
    "Danemark",
    "Espagne",
    "Estonie",
    "Finlande",
    "France",
    "Géorgie",
    "Grèce",
    "Hongrie",
    "Irlande",
    "Islande",
    "Italie",
    "Kazakhstan",
    "Kosovo",
    "Lettonie",
    "Liechtenstein",
    "Lituanie",
    "Luxembourg",
    "Macédoine du Nord",
    "Malte",
    "Moldavie",
    "Monaco",
    "Monténégro",
    "Norvège",
    "Pays-Bas",
    "Pologne",
    "Portugal",
    "République tchèque",
    "Roumanie",
    "Royaume-Uni",
    "Russie",
    "Saint-Marin",
    "Serbie",
    "Slovaquie",
    "Slovénie",
    "Suède",
    "Suisse",
    "Ukraine",
    "Vatican"
  ]
});
europe.save((err, destination) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Destination créée :', destination);
    }
  });
const amerique = new Destination({
    continent: 'Amerique',
    pays: [
        "Antigua-et-Barbuda",
        "Argentine",
        "Bahamas",
        "Barbade",
        "Belize",
        "Bolivie",
        "Brésil",
        "Canada",
        "Chili",
        "Colombie",
        "Costa Rica",
        "Cuba",
        "République dominicaine",
        "Dominique",
        "Équateur",
        "États-Unis",
        "Grenade",
        "Guatemala",
        "Guyana",
        "Haïti",
        "Honduras",
        "Jamaïque",
        "Mexique",
        "Nicaragua",
        "Panama",
        "Paraguay",
        "Pérou",
        "Saint-Christophe-et-Niévès",
        "Sainte-Lucie",
        "Saint-Vincent-et-les Grenadines",
        "Salvador",
        "Suriname",
        "Trinité-et-Tobago",
        "Uruguay",
        "Venezuela"
      ]
  });
amerique.save((err, destination) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Destination créée :', destination);
      }
    });
 const asie = new Destination({
        continent: 'Asie',
        pays: [
            "Afghanistan",
            "Arabie saoudite",
            "Arménie",
            "Azerbaïdjan",
            "Bahreïn",
            "Bangladesh",
            "Bhoutan",
            "Birmanie",
            "Brunei",
            "Cambodge",
            "Chine",
            "Chypre",
            "Corée du Nord",
            "Corée du Sud",
            "Émirats arabes unis",
            "Géorgie",
            "Inde",
            "Indonésie",
            "Irak",
            "Iran",
            "Israël",
            "Japon",
            "Jordanie",
            "Kazakhstan",
            "Kirghizistan",
            "Koweït",
            "Laos",
            "Liban",
            "Malaisie",
            "Maldives",
            "Mongolie",
            "Népal",
            "Oman",
            "Ouzbékistan",
            "Pakistan",
            "Philippines",
            "Qatar",
            "Russie",
            "Singapour",
            "Sri Lanka",
            "Syrie",
            "Tadjikistan",
            "Taïwan",
            "Thaïlande",
            "Timor oriental",
            "Turkménistan",
            "Turquie",
            "Viêt Nam",
            "Yémen"
          ]
      });
asie.save((err, destination) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Destination créée :', destination);
          }
        });
const afrique = new Destination({
            continent: 'Afrique',
            pays: [
                "Afrique du Sud",
                "Algérie",
                "Angola",
                "Bénin",
                "Botswana",
                "Burkina Faso",
                "Burundi",
                "Cameroun",
                "Cap-Vert",
                "République centrafricaine",
                "Comores",
                "République du Congo",
                "République démocratique du Congo",
                "Côte d'Ivoire",
                "Djibouti",
                "Égypte",
                "Érythrée",
                "Éthiopie",
                "Gabon",
                "Gambie",
                "Ghana",
                "Guinée",
                "Guinée-Bissau",
                "Guinée équatoriale",
                "Kenya",
                "Lesotho",
                "Liberia",
                "Libye",
                "Madagascar",
                "Malawi",
                "Mali",
                "Maroc",
                "Maurice",
                "Mauritanie",
                "Mozambique",
                "Namibie",
                "Niger",
                "Nigeria",
                "Ouganda",
                "Rwanda",
                "São Tomé-et-Principe",
                "Sénégal",
                "Seychelles",
                "Sierra Leone",
                "Somalie",
                "Soudan",
                "Soudan du Sud",
                "Swaziland",
                "Tanzanie",
                "Tchad",
                "Togo",
                "Tunisie",
                "Zambie",
                "Zimbabwe"
              ]
          });
afrique.save((err, destination) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Destination créée :', destination);
              }
            });
    
const oceanie = new Destination({
                continent: 'Oceanie',
                pays: [
                    "Australie",
                    "Fidji",
                    "Kiribati",
                    "Îles Marshall",
                    "Micronésie",
                    "Nauru",
                    "Nouvelle-Zélande",
                    "Palaos",
                    "Papouasie-Nouvelle-Guinée",
                    "Salomon",
                    "Samoa",
                    "Tonga",
                    "Tuvalu",
                    "Vanuatu"
                  ]
              });
oceanie.save((err, destination) => {
                  if (err) {
                    console.error(err);
                  } else {
                    console.log('Destination créée :', destination);
                  }
                });