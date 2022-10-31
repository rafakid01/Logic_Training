function idealWeight(height, sex) {
  if (typeof height != "number" || typeof sex != "string") {
    throw new Error(
      "O valor de altura deve ser um número, e do sexo deve ser uma string"
    );
  }
  if (sex == "male" || sex == "m") {
    let ideal = 72.7 * (height / 100 )- 58;
    let round = Math.round(ideal)
    console.log(`Seu peso ideal é ${round}kg`);
  } else if(sex == "female" || sex == "f") {
    let ideal = 62.1 * (height / 100 )- 44.7;
    let round = Math.round(ideal)
    console.log(`Seu peso ideal é ${round}kg`);
  }
}
idealWeight(163, "f");
