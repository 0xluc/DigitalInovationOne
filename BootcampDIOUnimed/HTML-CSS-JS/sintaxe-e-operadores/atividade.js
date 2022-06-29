// Minha resolução
function checkNum(a,b) {
    let stringEl1 = ''
    let stringEl2 = ''
    let stringEl3 = ''
    a == b ? undefined : stringEl1 += ' não'
    a + b > 10 ? stringEl2 += 'maior' : stringEl2 += 'menor' 
    a + b < 20 ? stringEl3 += 'menor' : stringEl3 += 'maior'
    console.log( `Os números ${a} e ${b}${stringEl1} são iguais. Sua soma é ${a+b}, que é ${stringEl2} que 10 e ${stringEl3} que 20.`)
}

checkNum(77,771)