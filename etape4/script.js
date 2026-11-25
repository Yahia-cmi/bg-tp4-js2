"use strict"; // Slide 30: Syntaxe et point-virgule

/* compteur de lignes */
let lignes = 0; // Slide 31: Déclaration de variables

/* total des points */
let total_points = 0; // Slide 31: Déclaration de variables

/* tableau persons initial */ // Slide 32: Tableaux
let persons = [
  { nom: "nom-1", prenom: "prenom-1", points: 10 },
  { nom: "nom-2", prenom: "prenom-2", points: 5 },
  { nom: "nom-3", prenom: "prenom-3", points: 15 }
]; // Slide 33-34: Objets et tableaux d'objets

/* insérer une ligne dans le tableau */
function doInsertRowTable(num, nom, prenom, points) { // Slide 38: Déclaration de fonction
  const tbody = document.querySelector("table tbody"); // Slide 47-52: Sélection d'éléments par sélecteur CSS

  const row = document.createElement("tr"); // Slide 92: Création d'éléments

  const col1 = document.createElement("td");
  const col2 = document.createElement("td");
  const col3 = document.createElement("td");
  const col4 = document.createElement("td");
  const col5 = document.createElement("td");

  col1.innerText = num; // Slide 78-79: Modification de contenu avec innerText
  col2.innerText = nom;
  col3.innerText = prenom;
  col4.innerText = points;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"; // Slide 80-81: Accès direct aux attributs
  col5.appendChild(checkbox); // Slide 91: appendChild()

  col1.className = "col_number"; // Slide 80-81: Modification de propriétés
  col2.className = "col_text";
  col3.className = "col_text";
  col4.className = "col_number";
  col5.className = "col_chkbox";

  row.append(col1, col2, col3, col4, col5); // Slide 85-86: append()
  tbody.appendChild(row); // Slide 91: appendChild()
}

/* doInsert : met à jour lignes et total_points, puis appelle update_summary */
function doInsert(nom, prenom, points) {
  lignes++; // Slide 35: Opérateurs arithmétiques (incrémentation)
  total_points += Number(points); // Slide 35: Opérateurs arithmétiques (addition et affectation)
  doInsertRowTable(lignes, nom, prenom, points); // Slide 38: Appel de fonction
  update_summary(); // Slide 38: Appel de fonction
}

/* init : parcourt persons et insère chaque objet */
function init() {
  for (const p of persons) { // Slide 37: Boucle for...of
    doInsert(p.nom, p.prenom, p.points); // Slide 33: Accès aux propriétés d'objet
  }
}

/* consoleTableau : affiche persons dans la console */
function consoleTableau() {
  console.log(persons); // Slide 28: Utilisation de console.log()
}

/* update_summary : met à jour l'espace résumé */
function update_summary() {
  document.getElementById("p1").innerText = `${lignes} ligne(s)`; // Slide 49-52: Sélection par ID + Template literals
  document.getElementById("p3").innerText = `Total point(s)= ${total_points}`; // Slide 78-79: Modification de contenu
}

/* liaison des boutons */
window.addEventListener("DOMContentLoaded", () => { // Slide 110-121: Événement onload
  // Initialiser le tableau avec persons
  init();

  // Bouton Ajouter : insère une ligne statique
  document.getElementById("btnAdd").addEventListener("click", () => { // Slide 110-121: Événement onclick
    doInsert("nom", "prenom", 10);
    persons.push({ nom: "nom", prenom: "prenom", points: 10 }); // Slide 32: Méthode push() sur les tableaux
  });

  // Bouton Console Tableau
  document.getElementById("btnConsole").addEventListener("click", consoleTableau); // Slide 110-121: Référence à fonction comme gestionnaire
});