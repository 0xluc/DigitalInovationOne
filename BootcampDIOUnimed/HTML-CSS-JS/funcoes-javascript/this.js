// this dentro de um método dentro de um objeto se refere a este objeto
const Pessoa = {
    fName: 'Lucas',
    sName: 'Silva',
    id: 1,
    fullName: function(){
        return this.fName + ' ' + this.sName
    }
}
console.log(Pessoa.fullName())

/* Em html, algo como:
    <button id='my-btn' onclick='console.log(this)'>Click me!</button>
    O this irá exibir todo o código acima, ou seja, toda a tag
*/

// Call

const pessoa = {
    nome: 'Miguel'
}

const animal = {
    nome: 'Luke'
}

function getSomething(){
    console.log(this.nome)
}

getSomething.call(animal) // 'this' se torna o objeto por causa do 'call'
getSomething.call(pessoa)

// call 2

const obj = {
    n1: 2,
    n2: 3
}

function soma(a,b){
    console.log(this.n1 + this.n2 + a + b)
}

soma.call(obj,1,2)

// apply funciona da mesma maneira, sua aplicação funciona da seguinte maneira:
soma.apply(obj,[1,2])

// Bind clona a estrutura da funçao onde é chamada e aplica o valor do objeto passado como parametro
// bind serve também para reutilizar contexto 
const returnoNome = function(){
    return this.nome
}

let bruno = returnoNome.bind({nome:'Bruno'})

console.log(bruno())
