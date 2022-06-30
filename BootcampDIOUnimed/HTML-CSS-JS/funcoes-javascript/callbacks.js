// função passada como argumento para outra função
const calc = function (opera,num1,num2) {
    return opera(num1,num2)
}

const soma = function(num1,num2){
    return num1 + num2
}
const sub = function(num1,num2){
    return num1 - num2
}

console.log(calc(soma,10,20))
console.log(calc(sub,2,1))