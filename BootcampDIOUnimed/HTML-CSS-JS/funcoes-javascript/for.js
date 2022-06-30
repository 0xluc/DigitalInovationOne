// For... in
function forIn(obj){
    for(prop in obj){
        console.log(obj[prop])
    }
}
const user = {
    id:12,
    id2:14
}
forIn(user)
forIn(['A',2,3,4])

// For... of / mesma coisa mas n precisa especificar o elemento pois funciona espeficamente para arrays e strings

function forOf(obj){
    for(prop of obj){
        console.log(prop)
    }
}
forOf(['A',2,3,4])

