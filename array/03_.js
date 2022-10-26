let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function change(array) {
    let arr2 = array.slice(0, 8)
    let arr3 = array.slice(8,16)
    
    let arrFinal = arr3.concat(arr2)

    console.log(arrFinal)
}
change(arr)