var LINUX = { "icon": "linux", "name": "Linux" };
var WINDOWS = { "icon": "windows", "name": "Windows" };
var PROJECTS = { "icon": "projects", "name": "Projekty" };
var JAVASCRIPT = { "icon": "javascript", "name": "JavaScript" };
var HTML5 = { "icon": "html5", "name": "HTML 5" };
var PHP = { "icon": "php", "name": "PHP" };
var PROGRAMMING = { "icon": "code", "name": "Programowanie" };

module.exports = {
  "name": "Olgierd Grzyb",
  "revision": require('./tools/current-revision'),
  "description": "Jestem studentem. W kręgu moich zainteresowań leży przede wszystkim web development, czyli potocznie – robienie internetów, a także systemy Linux.",
  "allWritings": [
    {
      "title": "Pobieranie rekurencyjne przy pomocy wget",
      "description": "Jak łatwo pobrać całe drzewo folderów z serwera HTTP",
      "url": "/wget/rekurencja",
      "labels": [LINUX],
    },
    {
      "title": "Zmiana hasła użytkownika Windows - Linuksem",
      "description": "Odzyskaj dostęp do systemu w kilku prostych krokach",
      "url": "/haslo",
      "labels": [LINUX, WINDOWS],
    },
  ],
  "topWritingsCount": 5,
};

module.exports.topWritings = module.exports.allWritings.slice(0, module.exports.topWritingsCount);
