const user = {
    id: 42,
    fullName: {
        first: 'John',
        second: 'Nash'
    }
}

function userId({id}){
    return id;
}
function getFullName({fullName: {first: n1, second: n2}}){
    return `${n1} ${n2}`
}
console.log(`idade é ${userId(user)} e nome é ${getFullName(user)}`)