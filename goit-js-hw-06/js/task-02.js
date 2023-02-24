const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients')
const createElementWithParams = (name, params = null) => {
  const el = document.createElement(name);
  if (params) {
    Object.entries(params).forEach(param => {
      el[param[0]] = param[1];
    });
  }
  
  return el;
};

ingredients.forEach( el => {
  const element = createElementWithParams('li', {classList : 'item', textContent: el})
  ul.append(element)
})