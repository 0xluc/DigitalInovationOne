let valueAny: any //permite qualquer tipo
valueAny = '1'
valueAny = true

// reatribuição any
let valueString: string = "teste"
valueString = valueAny
let valueString2: string = "teste2"
valueString2 =valueAny
// any é um valor anti tipagem

function somarString(string1: string, string2:string){
    console.log(string1+string2)
}

somarString(valueString,valueString2)