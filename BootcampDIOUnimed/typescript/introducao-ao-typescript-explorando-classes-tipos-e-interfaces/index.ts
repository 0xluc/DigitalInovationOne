// generic types

// <> é usado para especificar qual o tipo de dados q será usado, T representa um valor indefinido
function fillList<T>(array: any[], value: T) {
    return array.map(item => item + value)
}

fillList([1,2,3],1)