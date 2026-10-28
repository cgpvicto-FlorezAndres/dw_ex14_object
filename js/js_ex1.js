const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];

// Partie 1 

// Affichez dans la console le titre du premier livre du tableau.
console.log(livres[0].titre);
// Affichez le nombre total de livres dans la collection.
console.log(livres.length);
// Utilisez console.table() pour afficher le tableau de livres
console.table(livres);
// Maintenant créez une boucle qui affiche le titre et l’auteur de chaque livre.
for (const titre of livres) {

    console.log(`${titre.titre} ${titre.auteur}`);

}

// Partie 2

// Ajoutez un nouveau livre à la fin du tableau :
// { titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false }

livres.push({ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false });

// Changez la disponibilité du livre "Le Seigneur des anneaux" à true.
// Vous devez parcourir le tableau de livres pour le retrouver et 
// changer la propriété disponible.

for (const titre of livres) {

    if (titre.titre === "Le Seigneur des anneaux") {
        titre.disponible = true;
    }

}
console.table(livres);

// Supprimez le livre "Fahrenheit 451" du tableau. Comme le livre n'est pas au début
// ni à la fin du tableau, vous ne pouvez utiliser les méthodes .pop() et .shift().
// Commencez par retrouver son index avec .findIndex().
// Ensuite, si vous avez un résultat, utilisez la méthode .splice()

let indexLivre = livres.findIndex((livres) => livres.titre === "Fahrenheit 451")

if (indexLivre >= 0) {
    livres.splice(indexLivre, 1)

}
console.table(livres);

// Partie 3 – Recherche et filtrage
// Créez un nouveau tableau contenant uniquement les livres disponibles.

const nouveauTableau = livres.filter((livre) => {

    return livre.disponible === true
})
console.table(nouveauTableau);

// Affichez le titre des livres disponibles publiés avant 1960
for (const livre of nouveauTableau) {
    if (livre.annee < 1960) {
        console.log(livre)
    }

}

// Cherchez s’il existe des livres de l’auteur "Frank Herbert" et affichez un message
//  approprié :
// "Livres trouvés : Dune, Le messie de Dune"
// ou "Aucun livre de Frank Herbert trouvé."

for (const livre of nouveauTableau) {
    if (livre.auteur === "Frank Herbert") {
        console.log("Livres trouvés : Dune, Le messie de Dune")
    }
    else (
        console.log("Aucun livre de Frank Herbert trouvé.")
    )
}

// Partie 4 – Fonction d'affichage du catalogue

//Écrivez une fonction afficherCatalogue(livres) qui :

// Trie les livres par année de publication avec la méthode .sort().
// Utilisez la méthode .map() pour créer un nouveau tableau.
// Chaque item de ce tableau sera uniquement un string formaté comme ceci
//  : => titre (auteur) - [Disponible/Non disponible]
// Affiche le tableau comme ceci :

// === Catalogue des livres ===
// => 1984 (George Orwell, 1949) - Disponible
// => Le Seigneur des anneaux (J.R.R. Tolkien, 1954) - Disponible
// => Dune (Frank Herbert, 1965) - Disponible
// => Le messie de Dune (Frank Herbert, 1969) - Disponible
// => Neuromancien (William Gibson, 1984) - Non disponible

/**
 *  funciton qui tri un tableau d'objets livre de l'anne la plus ancienne à la plus recent
 * @param {livres} livres 
 * return un string comme : titre (auteur, anne) - [Disponible/Non disponible]
 */
function afficherCatalogue(livres) {

    livres.sort((a, b) => a.annee - b.annee);

    let nouveauTableau = livres.map((livre) => {

        return ` => ${livre.titre} (${livre.auteur}, ${livre.annee}) -  ${livre.disponible ? "Disponible" : "Non disponible"}`
    })

    console.log("=== Catalogue des livres ===");

    for (const livre of nouveauTableau) {
        console.log(livre);
    }
}

// Partie 5 – Lancer une recherche depuis un bouton

function rechercherLivre() {

    let trouve = false;
    let auteurRecherche = prompt("Entrez le nom de l'auteur")
    for (const livre of livres) {
        if (livre.auteur.toLowerCase() === auteurRecherche.toLowerCase()) {
            alert("Livres trouvés : Dune, Le messie de Dune");
            trouve = true
        }
    }
    if (!trouve) {
            alert(`Aucun livre de ${auteurRecherche} trouvé.`)
        }
        
}

