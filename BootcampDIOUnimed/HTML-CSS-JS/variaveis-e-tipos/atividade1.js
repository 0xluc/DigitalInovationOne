// Verifique de duas maneiras diferentes entre si se uma String é um palíndromo

function palinChecker(string){
    const WORDS = string.toLowerCase().split('') // coloca cada charactere em lower case e depois em um array 

    const SPLITFILTER = WORDS.filter(function(el){return el !=' '}) // remove espaços em branco

    if(JSON.stringify(SPLITFILTER)==JSON.stringify(SPLITFILTER.reverse())){  //checa se o array é igual seu reverso
        console.log(`${string} é um palíndromo`)
    } else {
        console.log(`${string} não é um palíndromo`)
    }
}

palinChecker('Socorram me subi no onibus em Marrocos')

function palinChecker2(string) {
    let phrase = ''
    const WORDS = string.toLowerCase().split('') // coloca cada charactere em lower case e depois em um array 

    const SPLITFILTER = WORDS.filter(function(el){return el !=' '}) // remove espaços em branco
    console.log(SPLITFILTER)
    for (let i = 0; i < Math.floor(SPLITFILTER.length / 2); i++) { // percorre metade do array e compara cada charactere com seu correspondente do final
        if(SPLITFILTER[i] != SPLITFILTER[SPLITFILTER.length - i - 1]){
            phrase += 'não '
            break
        }
    }
    console.log(`${string} ${phrase}é um palíndromo`)
}

palinChecker2('manar pra Nam')