let myTodo = []

const inputField = document.getElementById('input-field')
const inputButton = document.getElementById('input-button')
const list = document.getElementById('list')
const todoLocalStorage = JSON.parse(localStorage.getItem("myTodo"))

if (todoLocalStorage){
    myTodo = todoLocalStorage
    render(myTodo)
}

function render(array){
    let listItems = ''
    for (let i = 0; i < array.length; i++) {
        listItems += `
            <li>
                <input type="checkbox">
                    <span id='list-text'>${array[i]}</span>
            </li>
        `
    }
    list.innerHTML = listItems
}

function toggleLineThrough(element) {
  if (element.checked) {
    document.getElementById("list-text").style.textDecoration = "line-through";
  }
  else {
    document.getElementById("list-text").style.textDecoration = "none";
  }
  
}

inputButton.addEventListener('click', function() {
    myTodo.push(inputField.value)
    inputField.value = ''
    render(myTodo)

})