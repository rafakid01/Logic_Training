function primo(num) {
  if(typeof num != "number"){
    throw new Error("Deve-se passar um número");
  }
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        return false
    }
  }
  return true
}
console.log(primo(40));
