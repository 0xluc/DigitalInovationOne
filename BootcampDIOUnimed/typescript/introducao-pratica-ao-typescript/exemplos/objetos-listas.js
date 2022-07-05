"use strict";
// objeto criado por inferencia
const Pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Desenvolvedora'
};
//objetos criados explícitando os tipos
const Andre = {
    nome: 'andre',
    idade: 27,
    profissao: 'jogador'
};
const Paula = {
    nome: 'Paula',
    idade: 27,
    profissao: 'desenvolvedora'
};
//enumeraçao de tipos de profissoes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
const Vanessa = {
    nome: 'Vannesa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const Jessica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matematica', 'Programação'],
    profissao: Profissao.Professora
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Jessica.materias);
