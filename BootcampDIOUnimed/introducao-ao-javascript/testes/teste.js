function even(array){
    let evenN = []    
    for (let index = 0; index < array.length; index++) {
        if (array[index]%2==0) {
           evenN.push(array[index]) 
        }
    }
    return evenN
}

console.log(even([1,2,3,4,5,6,7]))