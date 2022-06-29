// for of

// for ([indice] of [array]) {
//   decclaracao
// }

array = [1,2,3,4]

for (const i of array) {
    console.log(i)
}

// nao funciona em objects, pois o indice nao é numérico e inteiro sempre

//while 

let a = 0
while (a<=10) {
    console.log(a)
    a++
}

//do while
// verificaçao feita após a execução
a = 0 
do {
    a++;
    console.log(a)
} while (a<10)