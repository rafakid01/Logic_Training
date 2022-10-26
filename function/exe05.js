function conversao(seg) {
  if (typeof seg != "number" || seg < 0) {
    throw new Error("É necessário inderir um número");
  }

  const todayDate = new Date() / 1000; // data em segundos
  const units = new Date(todayDate * 1000)
    .toLocaleDateString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .substring(12, 20);
  console.log(units); // "08:28:06"
}

console.log(conversao(60));
