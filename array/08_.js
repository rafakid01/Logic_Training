let arr = [];

for (let i = 0; i < 40; i++) {
  let number = Math.round(Math.random() * (100 - -100) + -100);

  arr.push(number);
}
let initial = 0;
let result = arr.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
});

console.log(arr);
console.log(result);
