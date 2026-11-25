"use strict";

// Variables globales (Slide 31)
let lignes = 0;
let total_points = 0;
let persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Fonction pour insérer une ligne dans le tableau (Slides 91-92)
function doInsertRowTable(num, nom, prenom, points) {
    const tbody = document.getElementById("tableBody");
    
    // Création des éléments (Slide 92)
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    
    // Attribution du contenu (Slide 78-79)
    col1.textContent = num;
    col2.textContent = nom;
    col3.textContent = prenom;
    col4.textContent = points;
    
    // Création checkbox (Slide 80-81)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    // Assemblage des éléments (Slide 85-86, 91)
    col5.appendChild(checkbox);
    row.append(col1, col2, col3, col4, col5);
    tbody.appendChild(row);
    
    // Attribution des classes (Slide 80-81)
    col1.className = "col_number";
    col2.className = "col_text";
    col3.className = "col_text";
    col4.className = "col_number";
    col5.className = "col_chkbox";
}

// Fonction d'insertion (Slide 38)
function doInsert(nom, prenom, points) {
    lignes++;
    total_points += Number(points);
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}

// Fonction pour ajouter nouvelles données (Slide 36)
function doNewData() {
    const elNom = document.getElementById("form_nom");
    const elPrenom = document.getElementById("form_prenom");
    const elPoints = document.getElementById("form_points");

    const nom = elNom.value.trim();
    const prenom = elPrenom.value.trim();
    const points = parseInt(elPoints.value);

    // Validation (Slide 36)
    if (nom === "" || prenom === "" || isNaN(points)) {
        alert("Veuillez remplir tous les champs correctement !"); // Slide 103
        return;
    }

    // Insertion et mise à jour du tableau (Slide 32)
    doInsert(nom, prenom, points);
    persons.push({ nom, prenom, points });

    // Réinitialisation formulaire
    elNom.value = "";
    elPrenom.value = "";
    elPoints.value = "";
}

// Fonction de suppression (Slides 88-89)
function deleteRow() {
    if (lignes === 0) {
        alert("Le tableau est vide !"); // Slide 103
        return;
    }

    // Sélection des checkboxes cochées (Slide 64-66)
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    
    if (checkboxes.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Confirmation de suppression (Slide 103)
    if (!confirm(`Voulez-vous vraiment supprimer ${checkboxes.length} ligne(s) ?`)) {
        return;
    }

    let deletedCount = 0;
    let totalPointsRemoved = 0;

    // Parcours avec forEach (Slide 37)
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        if (row) {
            const points = parseInt(row.cells[3].textContent);
            totalPointsRemoved += points;
            deletedCount++;
            row.remove(); // Slide 88
        }
    });

    // Mise à jour des compteurs
    lignes -= deletedCount;
    total_points -= totalPointsRemoved;
    updatePersonsFromDOM();

    alert(`${deletedCount} ligne(s) supprimée(s) avec succès !`);
    update_summary();
}

// Mise à jour du tableau persons depuis le DOM
function updatePersonsFromDOM() {
    persons = [];
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const nom = row.cells[1].textContent;
        const prenom = row.cells[2].textContent;
        const points = parseInt(row.cells[3].textContent);
        
        persons.push({ nom, prenom, points }); // Slide 32
    });
}

// Fonction d'initialisation
function init() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = ''; // Slide 78-79
    
    if (lignes === 0) {
        persons.forEach(person => { // Slide 37
            doInsert(person.nom, person.prenom, person.points);
        });
    }
}

// Affichage dans la console (Slide 28)
function consoleTableau() {
    console.table(persons);
    console.log("Nombre total de lignes:", lignes);
    console.log("Total des points:", total_points);
}

// Mise à jour du résumé
function update_summary() {
    document.getElementById("lineCount").textContent = `${lignes} ligne(s)`;
    document.getElementById("totalPoints").textContent = `Total point(s)= ${total_points}`;
}

// Initialisation au chargement (Slides 110-121)
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    // Gestion des événements (Slides 110-121)
    document.getElementById("btnAdd").addEventListener("click", doNewData);
    document.getElementById("btnConsole").addEventListener("click", consoleTableau);
    document.getElementById("btnDelete").addEventListener("click", deleteRow);
});