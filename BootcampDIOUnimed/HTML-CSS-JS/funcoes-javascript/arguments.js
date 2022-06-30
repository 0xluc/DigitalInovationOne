// objeto que permite receber infinitos argumentos nas funçoes

function findMax(){
    let max = -Infinity //inicializado como -infinito para poder receber analisar negativos tambem

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        } 
    }
    return max
}

console.log(findMax(1,2,3,99,9,0,1,-1,-100,9998213))
console.log(findMax(-11,-22,-33,''))