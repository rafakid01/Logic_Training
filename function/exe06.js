function age(idade) {
  let actualDate = new Date();
  let birthDate = new Date(idade);

  let diferenceMs = actualDate - birthDate;
  let secs = diferenceMs / 1000
  let min = secs / 60
  let hours = min / 60
  let days = Math.round(hours / 24)

  console.log(actualDate);
  console.log(birthDate);
  console.log(diferenceMs);
  console.log(days)
}

age("2003-09-24");
