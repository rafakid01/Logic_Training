function isPositive(number) {
  if (typeof number !== "number") {
    throw new Error(`${number} não é considerado número`);
  }
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(50))
