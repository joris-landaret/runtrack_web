function addition(nb1,nb2){
    let somme = nb1 + nb2;
    return somme;
}
console.log(addition(1,5));

const coucou = (chain) => {
    if (typeof chain === 'string' && chain.length > 0){
        return chain.length;
    }else{console.log("erreur");}
}

const hello = "hello";
console.log(coucou(hello));