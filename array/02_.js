let arr = [];

for (i = 0; i <= 50; i++) {
  if (i % 2 != 0) {
    arr.push(i);
  }
  if (arr.length == 10) {
    break;
  }
}
console.log(arr);
