let arr = [];
let counter = 0;

for (i = 1; i <= 40; i++) {
  let number = Math.round(Math.random() * 100);
  arr.push(number);

  if (number % 2 == 0) {
    counter++;
  }
}
console.log(counter);
console.log(arr);
