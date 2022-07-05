//podemos criar tipos customizados
type input = number | string

function somar(input1: input,input2: input){
    if(typeof input1 === "string" || typeof input2 === "string"){
        return input1.toString()+input2.toString()
    } else{
        return input1 + input2
    }
}
console.log(somar('olá',', como vai?'))
console.log(somar(1,7))
console.log(somar("Sabe que dia é hoje? ",10))
/*
function (input1: number | string,input2: number | string){
    if(typeof input1 === "string" || typeof input2 === "string"){
        return input1.toString()+input2.toString()
    } else{
        return input1 + input2
    }
}
*/