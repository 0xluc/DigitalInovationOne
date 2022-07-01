// todas as funçoes abaixo equivalem a mesma funçao
const helloWorld = function(){
    return 'hello world'
}

const helloWorld2 = () => {
    return 'hello world'
}

const helloWorld3 = () => 'hello world'

console.log(helloWorld())
console.log(helloWorld2())
console.log(helloWorld3())

// caso tenha só um parametro, dispense os parenteses

const show = a => a
console.log(show(4))

/** Notas
 * 
 * This é global sempre
 * Não existem arguments
 * Construtor new não pode ser utilizado   
 */