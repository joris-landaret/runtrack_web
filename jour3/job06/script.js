const bouton = document.getElementById("changeCouleur");

bouton.addEventListener("click", () => {
    // Génère une couleur aléatoire en format hexadécimal
    const couleur = "#" + ((1 << 24) * Math.random() | 0).toString(16);

    // Change la couleur de fond de la page
    document.body.style.backgroundColor = couleur;
});