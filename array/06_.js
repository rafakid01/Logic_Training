let arr = [];

for (let i = 1; i <= 40; i++) {
  let number = Math.round(Math.random() * (100 - -100) + -100);

  if (number < 0) {
    number = 0;
  }

  arr.push(number);
}
console.log(arr);
