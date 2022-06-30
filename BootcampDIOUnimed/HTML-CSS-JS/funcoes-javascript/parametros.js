// valores padrão

function exp(array, num = 1){ //num inicia com valor 1 se não for estabelecido
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num)
    }
    return result
}

console.log(exp([1,2,3,4],4))
console.log(exp([1,2,3,4]))