"use strict";

/**
 * Fonction pour insérer une nouvelle ligne dans le tableau
 * Paramètres: num (numéro), nom, prenom, points
 */
function doInsertRowTable(num, nom, prenom, points) {
    
    // Récupérer l'élément tbody du tableau (Slide 47-52: Sélection d'éléments)
    const tbody = document.querySelector('table tbody');
    
    // Créer un élément de type tr (ligne de tableau) (Slide 92: Création d'éléments)
    const row = document.createElement('tr');
    
    // Affecter à l'élément row, la valeur "row" à son attribut "class" (Slide 94-95: Manipulation d'attributs)
    row.setAttribute('class', 'row');
    
    // Créer 5 éléments de type td (colonnes du tableau) (Slide 92: Création d'éléments)
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');
    const col4 = document.createElement('td');
    const col5 = document.createElement('td');
    
    // Remplir le contenu de chaque colonne avec les paramètres (Slide 78-79: innerHTML/innerText)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    
    // La dernière colonne contient une checkbox (Slide 92: Création d'éléments)
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox'); // Slide 94-95: Manipulation d'attributs
    col5.appendChild(checkbox); // Slide 91: appendChild()
    
    // Affecter les classes correspondantes pour chaque colonne (Slide 94-95: Manipulation d'attributs)
    col1.setAttribute('class', 'col_number');
    col2.setAttribute('class', 'col_text');
    col3.setAttribute('class', 'col_text');
    col4.setAttribute('class', 'col_number');
    col5.setAttribute('class', 'col_chkbox');
    
    // Ajouter les colonnes à la ligne (Slide 85-86: append())
    row.append(col1, col2, col3, col4, col5);
    
    // Ajouter la ligne au tbody du tableau (Slide 91: appendChild())
    tbody.appendChild(row);
}

// Attacher l'événement au bouton "Ajouter" (Slide 110-121: Gestion d'événements)
document.querySelector('.btn-row button').addEventListener('click', function() {
    // Exemple : insérer une ligne avec des données statiques
    doInsertRowTable(99, "nom", "prenom", 10);
});