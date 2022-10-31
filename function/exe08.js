function category(age) {
  if (age > 4 && age < 8) {
    console.log(`O nadador com ${age} anos é da categoria Infantil A`);
  } else if (age > 7 && age < 11) {
    console.log(`O nadador com ${age} anos é da categoria Infantil B`);
  } else if (age > 10 && age < 14) {
    console.log(`O nadador com ${age} anos é da categoria Juvenil A`);
  } else if (age > 13 && age < 18) {
    console.log(`O nadador com ${age} anos é da categoria Juvenil B`);
  } else if (age >= 18) {
    console.log(`O nadador com ${age} anos é da categoria Adulto`);
  } else {
    console.log("Categoria não definida para essa idade");
  }
}

category(19);
