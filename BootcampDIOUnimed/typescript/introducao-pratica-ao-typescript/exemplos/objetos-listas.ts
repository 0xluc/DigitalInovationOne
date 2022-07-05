// objeto criado por inferencia
const Pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Desenvolvedora'
}

//objetos criados explícitando os tipos
const Andre: {nome: string, idade: number, profissao: string} = {
    nome: 'andre',
    idade: 27,
    profissao: 'jogador'
}
const Paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 27,
    profissao: 'desenvolvedora'
}

//enumeraçao de tipos de profissoes
enum Profissao  {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogador
}

//utilização de interfaces para criação de objetos
interface Pessoa{
    nome: string,
    profissao?: Profissao, // pode ou não ser usado por causa do ?
    idade: number
}
interface Estudante extends Pessoa {
    materias: string[] // Lista de strings
}

const Vanessa: Pessoa = {
    nome: 'Vannesa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matematica','Programação'],
    profissao: Profissao.Professora
}

function listar(lista:string[]) {
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(Jessica.materias)