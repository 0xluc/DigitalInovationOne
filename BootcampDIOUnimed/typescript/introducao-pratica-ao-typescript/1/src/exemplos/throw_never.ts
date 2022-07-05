//never é um tipo de código que nunca termina sua execução
function jogaErro(erro: string,codigo:number):never {
    throw{error: erro, code: codigo}
}

jogaErro('deu erro',500)