function isPare(num) {
  if (typeof num != "number") {
    throw new Error(`${num} não é um valor válido`);
  }
  if (num % 2 == 0) {
    return true;
  } else if (num % 2 != 0) {
    return false;
  }
}

console.log(isPare(22))