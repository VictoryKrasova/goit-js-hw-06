const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = ingredient
	liArray.push(item)
})

list.append(...liArray)



// const listIngredientsEl = document.getElementById("ingredients");
// ingredients.forEach(item => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = item;
//   listIngredientsEl.append(listItem);
// });

// let ingredientsEl = document.createElement('li');


// ingredientsEl.textContent = 'Potatoes';

// ingredientsEl.textContent = ingredients.map(ingredients => `${ingredients}`);
// ingredientsEl.classList.add('item');

// listIngredientsEl.append(ingredientsEl)

