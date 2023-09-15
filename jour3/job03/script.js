const tableau = ["un", 2, "trois", "quatre", 5, "le"];

for (let i = 0; i < tableau.length; i++) {
    const element = tableau[i];
    console.log(element);
}

console.log();

tableau.forEach(element => {
    console.log(element);
});