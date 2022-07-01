function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const p1 = {
    nome:'john',
    idade:18
}

console.log(calculaIdade.call(p1,10))
console.log(calculaIdade.apply(p1,[10]))