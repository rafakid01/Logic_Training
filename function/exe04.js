function baskara(a, b, c) {

    let delta = (b ** 2) - (4 * a * c);
    
    if (delta < 0) {

    throw new Error("Não há resultados possíveis. O Delta é negativo")

    } else {

        if(Number.isInteger(Math.sqrt(delta))) {

            let result1 = (0 - b) + (Math.sqrt(delta)) / (2 * a);
            let result2 = (0 - b) - (Math.sqrt(delta)) / (2 * a);
            return `x¹ = ${result1}___x² = ${result2}`
        } else {
            return `x¹ = ${0 - b} + √${delta} / ${2 * a}___x² = ${0 - b} - √${delta} / ${2 * a}`
        }
    }
}

console.log(baskara(3,-15,12));
