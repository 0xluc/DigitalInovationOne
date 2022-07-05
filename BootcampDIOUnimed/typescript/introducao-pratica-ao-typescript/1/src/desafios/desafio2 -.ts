// @ts-nocheck
// Como podemos melhorar o esse código usando TS? 
enum Trabalho {
    Atriz,
    Padeiro
}
interface PessoaType {
    nome: string,
    idade: number,
    profissao: Trabalho
}
let pessoa1 = {} as PessoaType;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Trabalho.Atriz

let pessoa2 = {} as PessoaType
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Trabalho.Padeiro

let pessoa3: PessoaType = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4:PessoaType = {
    nome: "carlos",
    idade:  19,
    profissao: Trabalho.Padeiro
}