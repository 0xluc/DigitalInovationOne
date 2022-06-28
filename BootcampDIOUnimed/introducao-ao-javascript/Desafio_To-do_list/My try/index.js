let myTodo = []

const inputField = document.getElementById('input-field')
const inputButton = document.getElementById('input-button')
const list = document.getElementById('list')


function render(array){
    let listItems = ''
    for (let i = 0; i < array.length; i++) {
        listItems += `
            <li>
                <p> <input type="checkbox" class="checkbox">
                    ${array[i]}</p>
            </li>
        `
 
    }
    
    list.innerHTML = listItems
}

inputButton.addEventListener('click', function() {
    if (inputField.value) {
    myTodo.push(inputField.value)
    inputField.value = ''
    render(myTodo)
    elems = document.getElementsByClassName('checkbox')
    Array.from(elems).forEach(v => v.addEventListener('change', function(){
        this.parentNode.classList.toggle('checked');
      }));    
    }
   
})
