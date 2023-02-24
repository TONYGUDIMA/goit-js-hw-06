function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body')
const btn = document.querySelector('.change-color')
const colorHex = document.querySelector('.color')
btn.addEventListener('click', event => { 
  colorHex.textContent = getRandomHexColor() 
  body.style.backgroundColor = colorHex.textContent
})