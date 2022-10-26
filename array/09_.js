let frase = "O rato roeu a roupa do rei de Roma";
let arr = [];
let final = []

for (let i = 0; i < frase.length; i++) {
  arr.push(frase[i]);
}

arr.forEach(function (el, array) {
    if (el != " ") {
        final.push(el)
    }
});

console.log(final)
