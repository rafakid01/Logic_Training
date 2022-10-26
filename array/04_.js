let arr = [1,2,3,4,5,6,"Rafael",8,9,10,11,12,13,14,15,16,17,18,19,20]

arr.forEach(function(el, index){
    if(typeof el == "string") {
        console.log(`Elemento encontrado na posição ${index}`)
    }
})