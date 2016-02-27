module.exports = {
  "name": "Olgierd Grzyb",
  "description": "Jestem studentem. W kręgu moich zainteresowań leży przede wszystkim web development, czyli potocznie – robienie internetów, a także systemy Linux.",
  "allWritings": [
    {
      "title": "Pobieranie rekurencyjne przy pomocy wget",
      "description": "Jak łatwo pobrać całe drzewo folderów z serwera HTTP",
      "url": "/wget/rekurencja"
    },
    {
      "title": "Zmiana hasła użytkownika Windows - Linuksem",
      "description": "Odzyskaj dostęp do systemu w kilku prostych krokach",
      "url": "/haslo"
    },
  ],
  "topWritingsCount": 5,
};

module.exports.topWritings = module.exports.allWritings.slice(0, module.exports.topWritingsCount);
