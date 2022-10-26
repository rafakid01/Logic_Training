function media(nota1, nota2, nota3, letra) {

  let lengthNotas = [];
  lengthNotas.push(nota1, nota2, nota3);

  if (letra == "A") {

    let mediaArit = (nota1 + nota2 + nota3) / lengthNotas.length;
    return mediaArit;

  } else if(letra == "P") {

    let pesos = [5,3,2]
    let result = pesos.reduce(function(pesos, current) {
        return pesos + current
    })
    let mediaPond = (nota1 * pesos[0] + nota2 * pesos[1] + nota3 * pesos[2]) / result
    return mediaPond

  } else if(letra == "H") {
    let elements = lengthNotas.length
    let intermediario = elements / ((1/nota1) + (1/nota2) + (1/nota3))
    let mediaHarm = intermediario.toFixed(2)
    return mediaHarm
  }
}

console.log(media(2,3,7,"H"));
