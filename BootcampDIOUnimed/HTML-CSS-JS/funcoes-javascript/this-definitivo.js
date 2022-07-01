// autor:  ellsonmendesYT (youtube)

// vinculaçao padrao

function mostrar() {// funçao no objeto global
    console.log(this)
}

// vinculaçao implicita
const menina = {
    nome: 'Lucia',
    jogos: ['gta','zelda'],

    mostrarJogos(){
        console.log(this.jogos) // this se refere a menina -> console.log(menina.jogos)
    }
}

menina.mostrarJogos()
menina.jogos

// vinculaçao explicita - apply call
const jogo = {
    nome:'gta'
}

const carro = {
    nome:'toyota',
    mostranome(){
        console.log(this.nome)
    }
}

carro.mostranome()
carro.mostranome.call(jogo) // aplicou a funcao junto do seu this no objeto jogo

// vinculaçao com bind
const mostrarnomeJogo = carro.mostranome.bind(jogo)
mostrarnomeJogo()