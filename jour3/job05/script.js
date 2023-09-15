const personne = {
    nom : "Inco",
    age : 16,
    ville : "Toul",
    biographie : function() {
        if(typeof this.nom === "string" && typeof this.age === "number" && typeof this.ville === "string"){
        console.log("Cette personne se nome " + this.nom + " à " + this.age + " ans et vit à " + this.ville);
        }
    }
}

personne.biographie();