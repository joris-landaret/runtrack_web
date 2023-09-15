const tableOrigine = [1, 2, 3, 4, 5];

const tableDebut = [0, ...tableOrigine];

const tableFin = [...tableOrigine, 6];

const tableSuprimer = tableOrigine.slice(1);

const tableAfficherFin = tableOrigine.filter((nb) => nb === tableOrigine.length)

console.log(tableOrigine);
console.log(tableDebut);
console.log(tableFin);
console.log(tableSuprimer);
console.log(tableAfficherFin);