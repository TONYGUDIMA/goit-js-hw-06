// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.


// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const boxes = document.querySelector('#boxes')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const controls = document.querySelector('#controls')
const input = document.querySelector('input')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createElementWithParams = (name, params = null) => {
  const el = document.createElement(name);
  if (params) {
    Object.entries(params).forEach(param => {
      el.style[param[0]] = param[1];
    });
  }
  
  return el;
};
function createBoxes(amount) {
  let array = []
  for (let i = 0; i < amount; i++) { 
    array.push(createElementWithParams('div', {
      width : (30 + 10 * i) + 'px', 
      height : (30 + 10 * i) + 'px', 
      backgroundColor : getRandomHexColor()}));
    }
  array.forEach(element => {
    boxes.append(element)
  });
}

function destroyBoxes() {
  boxes.innerHTML = ''
}



controls.addEventListener('click', event => {
  console.log(Object.keys(event.target.dataset)[0]);
  
  switch (Object.keys(event.target.dataset)[0]) {
    case 'create': createBoxes(+input.value)
    break;
    case 'destroy': destroyBoxes()
    break;
  }
})

