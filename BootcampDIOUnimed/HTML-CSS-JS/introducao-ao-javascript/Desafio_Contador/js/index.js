const incrementBtn = document.getElementById('adicionar')
const decrementBtn = document.getElementById('subtrair')
const currentNumber = document.getElementById('currentNumber')
let startingValue = 0


incrementBtn.addEventListener('click',increment)
decrementBtn.addEventListener('click',decrement)

function increment() {
    startingValue += 1
    currentNumber.textContent = startingValue
    if (startingValue < 0) {
            currentNumber.style.color = 'red'
        }
        else{
            currentNumber.style.color = ''
        }
}

function decrement() {
    startingValue -= 1
    currentNumber.textContent = startingValue
    if (startingValue < 0) {
        currentNumber.style.color = 'red'
    }
    else{
        currentNumber.style.color = ''
    }
}
