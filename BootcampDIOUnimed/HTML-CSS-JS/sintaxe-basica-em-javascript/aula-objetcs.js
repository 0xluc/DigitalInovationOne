let object = { string: 'string', number: '1', boolean: true, array: ['array']}

var string = object.string
console.log(string)

//desestruturação
var { string,boolean,array } = object

console.log(array)