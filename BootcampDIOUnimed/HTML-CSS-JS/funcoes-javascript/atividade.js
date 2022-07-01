const genAprovados = function (alunos,mF) {
    let arr = []

    for (let i = 0; i < alunos.length; i++) {
        const {nota,nome} = alunos[i]
        if(nota >= mF){
            arr.push(nome)
        }
    }
    return arr
}

const alunos = [
    {
        nome:'Joao',
        nota:5
    },
    {
        nome:'Sofia',
        nota:7
    },
    {
        nome:'Lucas',
        nota:10
    }
]

console.log(genAprovados(alunos,7))