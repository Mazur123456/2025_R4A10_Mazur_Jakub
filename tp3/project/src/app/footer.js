// Récupérer l'élément du footer
const footerText = document.getElementById("footer-text");

// Nom de l'agence de voyage
const agencyName = "Air Travel";

// Obtenir l'année en cours
const currentYear = new Date().getFullYear();

// Générer le texte du footer
footerText.textContent = `${agencyName} - Copyright © ${currentYear}`;