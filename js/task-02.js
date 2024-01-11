const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

const makeIngredient = ingredients.map((item) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = item;
  ingredientItem.classList.add("item");

  return ingredientItem;
});
listIngredients.append(...makeIngredient);