let any: any
any = ''
any = 2
any = true

let stringtest1:string = 'Teste'
stringtest1 = any

let unknownValor: unknown
unknownValor = 3
unknownValor = false
unknownValor = 'teste'

let stringtest2:string = 'Teste'
stringtest2 = unknownValor // para fazer essa atribuição é necessário uma validação

if(typeof unknownValor === 'string'){
    stringtest2 = unknownValor
}