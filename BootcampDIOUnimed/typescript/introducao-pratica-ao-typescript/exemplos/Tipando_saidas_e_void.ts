//tipando o valor de saída de uma função
function somarValores(n1: number,n2: number): number {
    return n1+n2 // caso coloque n2.toString() teremos um erro
}

//tipando com void(usado para funções que não retornam nada)
function somarValoresVoid(n1: number,n2: number): void {
    console.log(n1+n2)
}
