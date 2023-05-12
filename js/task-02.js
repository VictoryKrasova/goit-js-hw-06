const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredientsEl = document.getElementById("ingredients");
ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = item;
  listIngredientsEl.append(listItem);
});

// let ingredientsEl = document.createElement('li');


// ingredientsEl.textContent = 'Potatoes';

// ingredientsEl.textContent = ingredients.map(ingredients => `${ingredients}`);
// ingredientsEl.classList.add('item');

// listIngredientsEl.append(ingredientsEl)

