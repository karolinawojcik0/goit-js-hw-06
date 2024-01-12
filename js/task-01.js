const totalItems = document.querySelectorAll(".item");
const totalCategories = totalItems.length;

console.log("Number of categories:", totalCategories);

totalItems.forEach((item) => {
  const titleItem = item.firstElementChild.textContent;
  const totalPositionOfItem = item.lastElementChild.children.length;
  console.log("Category:", titleItem);
  console.log("Elements:", totalPositionOfItem)
});
