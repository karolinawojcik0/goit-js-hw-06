const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  const numberOfElements = categoryElements.length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});