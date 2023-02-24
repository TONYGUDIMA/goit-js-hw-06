// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

const ul = document.querySelector('#categories')

console.log(`Number of categories: ${ul.childElementCount}`);

const liList = document.querySelectorAll('.item')

const li = Array.from(liList)

function consoleFunc(arr) {
  
  arr.forEach(element => {
    console.log(`Category : ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
  });
}

consoleFunc(li)