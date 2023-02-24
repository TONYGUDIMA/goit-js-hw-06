function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function RGBAToHexA(rgba, forceRemoveAlpha = false) {
  return "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') 
    .split(',')
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => parseFloat(string))
    .map((number, index) => index === 3 ? Math.round(number * 255) : number)
    .map(number => number.toString(16))
    .map(string => string.length === 1 ? "0" + string : string) 
    .join("")
}
const body = document.querySelector('body')
const btn = document.querySelector('.change-color')
const colorHex = document.querySelector('.color')
btn.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor()
  colorHex.textContent = RGBAToHexA(body.style.backgroundColor)
})