var a = 1
var b = 2

if (a === 1) {
    var a = 11 // escopo global
    let b = 22 // escopo local deste bloco, mesma coisa pra const

    console.log(a) //11
    console.log(b) // 22
}

console.log(a) //11
console.log(b) //2