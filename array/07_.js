let arr1 = [];
let arr2 = [];
let arr3 = [];

let counter1 = 0;
let counter2 = 0;

for (let i = 0; i < 20; i++) {
  let number1 = Math.round(Math.random() * (100 - -100) + -100);
  let number2 = Math.round(Math.random() * (100 - -100) + -100);

  arr1.push(number1);
  arr2.push(number2);
}

for (let j = 0; j < 40; j++) {
  if (j % 2 == 0) {
    arr3[j] = arr1[counter1];
    counter1++;
  } else if (j % 2 != 0) {
    arr3[j] = arr2[counter2];
    counter2++;
  }
}

console.log(arr1);
console.log(arr2);

console.log(arr3);
