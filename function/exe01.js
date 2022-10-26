function volume(raio) {
  let pi = 3.14;

  let volumeEsfera = ((4/3) * pi) * raio ** 3;

  let volumeFinal = volumeEsfera.toFixed(2);
  return volumeFinal + "cm³";
}

console.log(volume(10));
