// troque todos os elementos pares e diferentes de zero de um array por 0, se o array for vazio retorne -1

function checkArray(array){
    if (array.length === 0){
        return -1
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            array[i] = 0 
        }
    }
    return array
}
console.log(checkArray([1,2,3,4,5,6,7,8]))
console.log(checkArray([]))
