  // Znajdź element ul#categories
  const categoriesList = document.getElementById('categories');

  // Znajdź wszystkie elementy li.item wewnątrz ul#categories
  const categoryItems = categoriesList.querySelectorAll('li.item');

  // Policzenie liczby kategorii
  const numberOfCategories = categoryItems.length;

  // Wypisz liczbę kategorii w konsoli
  console.log(`Number of categories: ${numberOfCategories}`);

  // Iteruj przez każdy element li.item
  categoryItems.forEach(item => {
    // Znajdź nagłówek h2 wewnątrz danego elementu li.item
    const categoryTitle = item.querySelector('h2').textContent;

    // Znajdź wszystkie elementy li wewnątrz danego elementu li.item
    const categoryElements = item.querySelectorAll('li');

    // Policzenie liczby elementów w danej kategorii
    const numberOfElements = categoryElements.length;

    // Wypisz informacje w konsoli
    console.log(`\nCategory: ${categoryTitle}`);
    console.log(`Elements: ${numberOfElements}`);
  });