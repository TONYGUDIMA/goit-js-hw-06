let counter = 0
const value = document.querySelector('#value')
const div = document.querySelector('#counter')
function increment() {
  value.innerText = ++counter
}
function decrement() {
  value.innerText = --counter
}
div.addEventListener('click', event => {
  switch(event.target.dataset.action) {
    case 'increment' : increment()
    break
    case 'decrement' : decrement()
    break
  }
})