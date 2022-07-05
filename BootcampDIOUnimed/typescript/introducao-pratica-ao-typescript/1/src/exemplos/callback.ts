// usando callbacks
// resultado da soma é tratado e jogado na função aoQuadrado usando callback
function somarValoresNum_Tratar(n1: number,n2: number, callback: (numero:number) => number): number { // 
    let resultado = n1+n2
    return callback(resultado)
}

function aoQuadrado(numero: number): number {
    return numero * numero
}

console.log(somarValoresNum_Tratar(1,2,aoQuadrado))