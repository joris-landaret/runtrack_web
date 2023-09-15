function calculette(nb1, nb2) {
    //Adition
    let somme = nb1 + nb2;
    console.log(somme);

    //soustraction
    let diference = nb1 - nb2;
    console.log(diference);

    //Multiplication
    let produit = nb1 * nb2;
    console.log(produit);

    //Diviser
    let division = nb1 / nb2;
    console.log(division);
}

function concatain(string1, string2) {

    let chain = string1 + string2;
    console.log(chain);
    
}

// utilisateur doit choisir deux nombres qui sont enregistrés dans des varibles
let nombre1 = Number(window.prompt("veuillez choisir un premier nombre"));
let nombre2 = Number(window.prompt("veuillez choisir un deuxième nombre"));

calculette(nombre1, nombre2);

let chain1 = prompt("veuillez saisir un premier mot");
let chain2 = prompt("veuillez saisir un deuxième mot");

concatain(chain1, chain2);