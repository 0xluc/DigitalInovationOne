/*
number() -> converter valores em numeros
prompt() -> registrar entradas do usuario
alert() -> mostrar mensagens ao usuario
templateStrings() -> usar strings juntos de expressoes
*/
function soma(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mult(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function divI(a,b){
    return a%b
}
function pot(a,b){
    return a**b
}

function calc(){
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))

    const operation = Number(prompt(`Escolha uma operação:\n 
    1 - Soma\n 
    2 - Subtração\n 
    3 - Multiplicação\n 
    4 - Divisão real\n 
    5 - Divisão Inteira\n 
    6 - Potenciação`))
    
    switch (operation) {
        case 1:
            alert(soma(n1,n2))
            break;
        case 2:
            alert(sub(n1,n2))
            break
        case 3:
            alert(mult(n1,n2))
            break
        case 4:
            alert(div(n1,n2))
            break
        case 5:
            alert(divI(n1,n2))
            break
        case 6:
            alert(pot(n1,n2)) 
            break
        default:
            alert('Comando invalido, tente novamente')
            calc()
    }
}
while (true) {
    calc()
}