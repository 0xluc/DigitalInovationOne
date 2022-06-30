// spread
function sum(){
    let s = 0
    for (let i = 0; i < arguments.length; i++) {
         s += arguments[i] 
    }
    return s
}

const numbers = [1,2,3,4,5,6]

console.log(sum(...numbers)) // manda os elementos do array ao inves de cada um separadamente

// rest
function show(...args) { // transforma os arguments em um array
    console.log(args)
}
show(1,2,3) 