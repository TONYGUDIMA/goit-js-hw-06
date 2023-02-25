const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");

const createElementWithParams = (name, params = null) => {
  const el = document.createElement(name);
  if (params) {
    Object.entries(params).forEach(param => {
      el[param[0]] = param[1];
    });
  }
  
  return el;
};


const elements = ingredients.map((ingredientName) => {
  const ingredientsCreatItem = createElementWithParams('li', {textContent : ingredientName})
  ingredientsCreatItem.classList.add("item");
  ingredientsCreatItem.style = 'list-style: none'
  return ingredientsCreatItem;
});
ingredientsList.append(...elements);
