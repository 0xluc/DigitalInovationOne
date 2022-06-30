// objeto primitivo
let nome = 'Joao'
let sobrenome  = 'Pedro'

let completo = nome.concat(sobrenome) //metodo built in para unir strings

console.log(typeof(completo))

console.log(completo.length)

// objeto string

let exemplo = new String("teste") 

console.log(typeof(exemplo)) //object

// split

let frase = "Olá, como vai?"
console.log(frase.split("")) //separa por caracteres 
console.log(frase.split(" ")) //separa por espaços
