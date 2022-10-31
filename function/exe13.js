function order(n1, n2, n3) {
  if (typeof n1 != "number" || typeof n2 != "number" || typeof n3 != "number") {
    throw new Error("Insira apenas números");
  }
  let arr = [n1, n2, n3];
  arr.sort(function comnpare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  let separated = arr.join()
  console.log(separated)
}
order(12,75,-14)
